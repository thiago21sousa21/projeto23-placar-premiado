

export async function getGames (){
//     - Retorna todos os jogos cadastrados.
// - Saída: array de todos os jogos
    
//     ```tsx
//     [
//     	{
//     		id: number;
//     		createdAt: string;
//     		updatedAt: string;
//     		homeTeamName: string;
//     		awayTeamName: string;
//     		homeTeamScore: number;
//     		awayTeamScore: number;
//     		isFinished: boolean;
//     	},
//     	{...}
//     ]
//     ```
}

export async function createGame (){
//     - Cria um novo jogo, com placar inicial 0x0 e marcado como não finalizado.
// - Entrada: nome do time da casa e do time visitante.
    
//     ```tsx
//     {
//     	homeTeamName: string;
//     	awayTeamName: string;
//     }
//     ```
    
// - Saída: o objeto do jogo criado.
    
//     ```tsx
//     {
//     	id: number;
//     	createdAt: string;
//     	updatedAt: string;
//     	homeTeamName: string;
//     	awayTeamName: string;
//     	homeTeamScore: number; // inicialmente 0
//     	awayTeamScore: number; // inicialmente 0
//     	isFinished: boolean; // inicialmente false
//     }
//     ```
}

export async function finishGame (){
//     - Finaliza um jogo e consequentemente atualiza todas as apostas atreladas a ele, calculando o valor ganho em cada uma e atualizando o saldo dos participantes ganhadores.
// - Entrada: placar final do jogo.
    
//     ```tsx
//     {
//     	homeTeamScore: number;
//     	awayTeamScore: number;
//     }
//     ```
    
// - Saída: o objeto do jogo atualizado.
    
//     ```tsx
//     {
//     	id: number;
//     	createdAt: string;
//     	updatedAt: string;
//     	homeTeamName: string;
//     	awayTeamName: string;
//     	homeTeamScore: number;
//     	awayTeamScore: number;
//     	isFinished: boolean;
//     }
//     ```
}

export async function getGameWithBet (){
//     - Retorna os dados de um jogo junto com as apostas atreladas a ele.
// - Saída: o objeto do jogo contendo a array de apostas realizadas nele.
    
//     ```tsx
//     {
//     	id: number;
//     	createdAt: string;
//     	updatedAt: string;
//     	homeTeamName: string;
//     	awayTeamName: string;
//     	homeTeamScore: number;
//     	awayTeamScore: number;
//     	isFinished: boolean;
//     	bets: {
//     		id: number;
//     		createdAt: string;
//     		updatedAt: string;
//     		homeTeamScore: number;
//     		awayTeamScore: number;
//     		amountBet: number; // representado em centavos, ou seja, R$ 10,00 -> 1000
//     		gameId: number; 
//     		participantId: number;
//     		status: string; // podendo ser PENDING, WON ou LOST
//     		amountWon: number || null; // nulo quando a aposta ainda está PENDING; number caso a aposta já esteja WON ou LOST, com o valor ganho representado em centavos
//     	}[]
//     }
//     ```
}

