import React, { Component } from "react";
import Game from '../Game';
import { gameArrayCreator } from '../../data/helperFunctions/gameArrayCreator';
import Button from "../Button/Button";

class Round extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitNextRound = this.handleSubmitNextRound.bind(this);
        this.handleSubmitReset = this.handleSubmitReset.bind(this);
    };

    handleSubmitNextRound(e) {
        e.preventDefault();
        this.props.handleNextRound();
    };

    handleSubmitReset(e) {
        e.preventDefault();
        this.props.handleReset();
    };

    render() {
        const { rounds, totalRounds } = this.props;
        
        return (
            <>
            <h2>{ rounds.length === totalRounds ? "Final" : rounds.length === (totalRounds - 1) ? "Semifinals" : rounds.length === (totalRounds - 2) ? "Quarterfinals" : `Round ${ rounds.length }`}</h2>
                {rounds.map((round, i) => (
                    <article key={ i }>                        
                        <ul>
                            {gameArrayCreator(round).map((game, j) => 
                                <Game 
                                    key={ j }
                                    round={ round }
                                    game={ game }
                                />
                            )}
                        </ul>
                        <Button
                            buttonClass="btn btn-success"
                            handleClick={ this.handleSubmitNextRound }
                            type="submit"
                            label={ i + 1 === totalRounds ? 'Show the Tronmaster' : "Next Round" } 
                        />
                        <Button
                            buttonClass="btn btn-danger"
                            handleClick={ this.handleSubmitReset }
                            type="submit"
                            label="Reset"
                        />
                    </article>                      
                ))}
            </>
        )
    };
};

export default Round;
