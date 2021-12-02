import { TeamCard } from '../TeamCard';

import { 
    Container, 
    TeamWrapper, 
    TeamInfo, 
    TeamInfoImg, 
    TeamInfoTextsWrapper, 
    TeamInfoTitle, 
    TeamInfoDescription,
    TeamInfoLink,
    TeamInfoLinkIcon,
    TeamCardsContainer
} from './styles';

import user1Img from '../../assets/images/profile-1.jpg';
import user2Img from '../../assets/images/profile-2.jpg';
import user3Img from '../../assets/images/profile-3.jpg';

export const Team = () => {
    return (
        <Container id="team">
            <TeamWrapper>
                <TeamInfo>
                    <TeamInfoImg />
                    <TeamInfoTextsWrapper>
                        <TeamInfoTitle>
                            Stay productive, 
                            <br />
                            wherever you are
                        </TeamInfoTitle>
                        <TeamInfoDescription>
                            Never let location be an issue when accessing your files.
                            Fylo has you covered for all of your file storage needs.
                            <br />
                            <br />
                            Securely share files and folders with friends, family and colleagues for live collaboration.
                            No email attachments required.
                        </TeamInfoDescription>
                        <TeamInfoLink>
                            See how Fylo Works
                            <TeamInfoLinkIcon />
                        </TeamInfoLink>
                    </TeamInfoTextsWrapper>
                </TeamInfo>

                <TeamCardsContainer>
                    <TeamCard 
                        img={user1Img} 
                        text="Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine."
                        userName="Dharyel"
                        userJob="CTO, Luppi Tech"
                    />
                    <TeamCard 
                        img={user2Img} 
                        text="Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine."
                        userName="Bruce McKenzie"
                        userJob="Founder & CEO, Huddle"
                    />
                    <TeamCard 
                        img={user3Img} 
                        text="Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine."
                        userName="Iva Boyd"
                        userJob="Founder & CEO, Huddle"
                    />
                </TeamCardsContainer>
            </TeamWrapper>
        </Container>
    );
}