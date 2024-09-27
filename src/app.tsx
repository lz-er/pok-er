import { Room, RoomEvent } from "livekit-client";
import { AccessToken } from "livekit-server-sdk";
import { useEffect, useMemo, useState } from "preact/hooks";
import "./app.css";
import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";

const roomAtom = atomWithHash<string>("r", "");

export function App() {
  const [participantName, setParticipantName] = useState("");
  const [roomName, setRoomName] = useAtom(roomAtom);
  const [localRoomName, setLocalRoomName] = useState(roomName);
  const [room, setRoom] = useState<Room | null>(null);

  const [votes, setVotes] = useState<{ [participantName: string]: string }>({});

  useEffect(() => {
    if (roomName) {
      setLocalRoomName(roomName);
    }
  }, [roomName]);

  const generateTokenForRoom = async () => {
    if (!participantName || !localRoomName) {
      return;
    }
    const at = new AccessToken(
      import.meta.env.VITE_LIVEKIT_API_KEY,
      import.meta.env.VITE_LIVEKIT_API_SECRET,
      {
        identity: participantName,
        // Token to expire after 10 minutes
        ttl: "10m",
      }
    );
    at.addGrant({ roomJoin: true, room: localRoomName });
    return await at.toJwt();
  };

  const joinRoom = async () => {
    const token = await generateTokenForRoom();
    if (!token || !localRoomName || !participantName) {
      return;
    }
    let _room = room;
    if (_room) {
      _room.disconnect();
    }
    _room = new Room();
    setRoom(_room);
    _room.on(RoomEvent.DataReceived, (data, participant) => {
        console.log("data received", data, participant);
        if (!participant) {
          return;
        }
        const decoded = new TextDecoder().decode(data);
        setVotes((votes) => ({ ...votes, [participant.identity]: decoded }));
    });
    await _room.connect(import.meta.env.VITE_LIVEKIT_WSS_URL, token);
    setRoomName(localRoomName);
  };

  const voteCards = [
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "?",
  ];

  const voteCardElements = useMemo(() => {
    return voteCards.map((card) => (
      <button
        onClick={() => {
          if (!room) {
            return;
          }
          const encoded = new TextEncoder().encode(card);
          setVotes((votes) => ({ ...votes, [room.localParticipant.identity]: card }));
          room.localParticipant.publishData(encoded);
        }}
      >
        {card}
      </button>
    ));
  }, [room]);

  const voteElements = useMemo(() => {
    return Object.entries(votes).map(([name, vote]) => (
      <div>
        {name}: {vote}
      </div>
    ));
  }, [votes]);

  return (
    <>
      <h1>pok-er</h1>
      <div class="card">
        <input
          type="text"
          placeholder="Your name"
          onInput={(e) => setParticipantName(e.currentTarget.value)}
          value={participantName}
        />
        <input
          type="text"
          placeholder="Room name"
          onInput={(e) => setLocalRoomName(e.currentTarget.value)}
          value={localRoomName}
        />
        <button onClick={() => joinRoom()}>connect</button>
        {room && (
          <>
            <button
              onClick={() => {
                room.disconnect();
                setRoom(null);
              }}
            >
              disconnect
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/?r=${localRoomName}`
                );
              }}
            >
              copy link
            </button>
            {voteCardElements}
            {voteElements}
          </>
        )}
      </div>
    </>
  );
}
