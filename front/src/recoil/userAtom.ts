import { atom } from "recoil";
import { UserInfoType } from "../Types/userType";

export const userAtom = atom<UserInfoType | null>({
    key:"user",
    default:null
})
