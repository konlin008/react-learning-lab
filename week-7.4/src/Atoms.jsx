import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: "notification",
    default: 90
})

export const jobsAtom = atom({
    key: "jobs",
    default: 4
})

export const messageAtom = atom({
    key: "message",
    default: 10
})


export const myNetworkAtom = atom({
    key: "myNetwork",
    default: 100
})


export const allNotificaton = selector({
    key: 'allNotification',
    get: ({ get }) => {
        const notification = get(notificationAtom)
        const jobs = get(jobsAtom)
        const message = get(messageAtom)
        const myNetwork = get(myNetworkAtom)

        return (notification + jobs + message + myNetwork)
    }
})