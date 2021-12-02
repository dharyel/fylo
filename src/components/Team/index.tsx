import { 
    Container, 
    TeamWrapper, 
    TeamInfo, 
    TeamInfoImg, 
    TeamInfoTextsWrapper, 
    TeamInfoTitle, 
    TeamInfoDescription,
    TeamInfoLink,
    TeamInfoLinkIcon
} from './styles';


export const Team = () => {
    return (
        <Container>
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
            </TeamWrapper>
        </Container>
    );
}