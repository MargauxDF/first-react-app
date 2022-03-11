import blank_profile from './avatar.png';
import './Wilder.css';
import { Skill } from './Skill';
import Proptypes from 'prop-types';
import { Card } from './components/Card';

export function Wilder(props) {
    return (
        <Card>
            <img src={blank_profile} alt={`${props.name} profile`} />
            <h3>{props.name} from {props.city}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className="skills">
                {props.skills.map((skill, index) => <Skill key={index} title={skill.title} votes={skill.votes} />)}
            </ul>
        </Card>
    );
}

Wilder.propTypes = {
    name: Proptypes.string.isRequired,
    city: Proptypes.string.isRequired,
    skills: Proptypes.arrayOf(Proptypes.shape({
        title: Proptypes.string.isRequired,
        votes: Proptypes.number.isRequired,
    }))
}
