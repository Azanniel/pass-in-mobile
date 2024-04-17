import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Badge {
  id: string
  name: string
  email: string
  eventTitle: string
  checkInURL: string
  image?: string
}

interface BadgeStorageProps {
  badge: Badge | null
  save: (value: Badge) => void
  updateAvatar: (uri: string) => void
  delete: () => void
}

export const useBadgeStorage = create(
  persist<BadgeStorageProps>(
    (set, get) => {
      return {
        badge: null,

        save: (value) => {
          set({ badge: value })
        },

        updateAvatar: (uri) => {
          const { badge } = get()

          if (badge) {
            set({
              badge: {
                ...badge,
                image: uri,
              },
            })
          }
        },

        delete: () => {
          set({ badge: null })
        },
      }
    },
    {
      name: 'nlw-unite-badge',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
