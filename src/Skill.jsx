import './Skill.css';
import Proptypes from "prop-types";
import styled from 'styled-components';

const Badge = styled.span`
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Colors */
    background-color: ${(props) => props.votes > 5 ? 'green' : 'red'};
    color: #FFF;

    /* Rounded border */
    border-radius: 9999px;
    height: 20px;
    width: 20px; 
`;

export function Skill(props) {
    return (
        <li>
            {props.title}
            <Badge votes={props.votes}>{props.votes}</Badge>
        </li>
    );
}
    
Skill.propTypes = {
    title: Proptypes.string.isRequired,
    votes: Proptypes.number.isRequired,
};
