import prisma from "../database";
import { NewBet } from "../protocols";
import { BetStatus } from "@prisma/client";


export async function creatBet (newBet:NewBet){

    const result = await prisma.bet.create({data:newBet})
    return result
}

// export async function getBetAllBetsOfOneId (gameId:number){

//     const result = await prisma.bet.findMany({
//         where:{
//             gameId
//         }
//     })
//     return result
// }

// export async function updateStatusBet (betId:number, status:BetStatus){
//     const result = await prisma.bet.update({
//         where:{
//             id: betId
//         },
//         data:{
//             status
//         }
//     })
//     return result
// }

export async function updateBetsAndBalances(betId:number, participantId:number, gain:number, status:BetStatus){
    const result = await 
    prisma.$transaction([
        prisma.bet.update({
            where:{id:betId},
            data:{
                amountWon:gain,
                status
            }
        }),
        prisma.participant.update({
            where:{id:participantId},
            data:{
                balance:{
                    increment:gain
                }
            }
        })
    ])
}

