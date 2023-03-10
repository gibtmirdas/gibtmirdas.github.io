import { GameCode } from "./game_data";

export default interface Item {
    desc: string;
    pos: number;
    streamId: string;
    feedCode: string;
    onTv: boolean;
    cashout: boolean;
    parent: string;
    start: string;
    pdesc: string;
    count: number;
    a: string;
    b: string;
    code: GameCode;
    etype: string;
    retailIndex: number;
    inRunningCalendar: boolean;
    eventNote: string;
    startDateTime: Date;
    opponentAId: number;
    opponentBId: number;
    type: string;
    streamRef: string;
    bestOddsGuarantee: boolean;
    style: string;
    period: string;
    defaultMarket: string;
    uid: string;
    price: string;
    penultimatePrice: string;
    preferred: string;
    outcomeOrderPolicy: string;
    totalMarketCount: number;
    filteredMarketCount: number;
    // path: string;
}