import { create } from "zustand"

interface StreamStore {
  isStreaming: boolean
  currentStreamId: string | null
  peerId: string | null
  socketConnected: boolean
  viewers: number
  messages: { user: string; message: string; timestamp: Date }[]
  setStreaming: (streaming: boolean) => void
  setCurrentStream: (streamId: string | null) => void
  setPeerId: (peerId: string | null) => void
  setSocketConnected: (connected: boolean) => void
  setViewers: (count: number) => void
  addMessage: (user: string, message: string) => void
}

export const useStreamStore = create<StreamStore>((set) => ({
  isStreaming: false,
  currentStreamId: null,
  peerId: null,
  socketConnected: false,
  viewers: 0,
  messages: [],

  setStreaming: (streaming) => set({ isStreaming: streaming }),

  setCurrentStream: (streamId) => set({ currentStreamId: streamId }),

  setPeerId: (peerId) => set({ peerId }),

  setSocketConnected: (connected) => set({ socketConnected: connected }),

  setViewers: (count) => set({ viewers: count }),

  addMessage: (user, message) =>
    set((state) => ({
      messages: [...state.messages, { user, message, timestamp: new Date() }],
    })),
}))
