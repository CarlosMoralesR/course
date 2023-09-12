import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can throw a ball', () => {
    game.roll(0)
    expect(game).toBeDefined()
  })

  it('can roll all zeros', () => {
    game = rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  })

  it('can roll all 1s', () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  })

  it('can roll a spare', () => {
    game = rollSpare(game).roll(3);
    game = rollMany(game, 17, 0);
    expect(game.score()).toBe(16);
  })

  it('can roll a strike', () => {
    game = rollStrike(game).roll(2).roll(2);
    game = rollMany(game, 16, 0);
    expect(game.score()).toBe(18)
  })

  it('can roll a perfect game', () => {
    game = rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  })

});

function rollMany(game: BowlingGame, rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
  
  return game;
}

function rollSpare(game){
  return game.roll(5).roll(5);
}

function rollStrike(game){
  return game.roll(10);
}
