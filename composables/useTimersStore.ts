import { defineStore } from "pinia";
import { nanoid } from "nanoid";

interface Timer {
  name: string;
  seconds: number;
  ticksMS: number;
  isActive: boolean;
}

interface State {
  timers: Record<string, Timer>;
  intervalId: number | null;
  latestUpdate: number;
}

const initState: State = {
  timers: {},
  intervalId: null,
  latestUpdate: 0,
};

export const useTimersStore = defineStore({
  id: "timers",
  state: () => initState,
  actions: {
    add(seconds: number, name: string) {
      this.timers[nanoid()] = { seconds, name, ticksMS: 0, isActive: true };
      if (this.intervalId == null) {
        this.latestUpdate = Date.now();
        this.intervalId = setInterval(() => {
          const newestUpdate = Date.now();
          const ticks = newestUpdate - this.latestUpdate;
          this.latestUpdate = newestUpdate;
          for (let timerId of Object.keys(this.timers)) {
            if (this.timers[timerId].isActive) {
              this.timers[timerId].ticksMS += ticks;
            }
          }
        }, 1000) as any;
      }
    },
    play(id: string) {
      this.timers[id].isActive = true;
    },
    pause(id: string) {
      this.timers[id].isActive = false;
    },
    clear(id: string) {
      delete this.timers[id];
    },
    setName(id: string, name: string) {
      this.timers[id].name = name;
    },
  },
  getters: {
    id: (state) => {
      return (timerId: string) => {
        return state.timers[timerId];
      };
    },
    ids: (state) => {
      return Object.keys(state.timers);
    },
  },
});
