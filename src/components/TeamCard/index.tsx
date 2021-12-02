import {
    Card,
    CardUserWrapper,
    CardText,
    CardUserImg,
    CardUserTexts,
    CardUserJob,
    CardUserName,
} from './styles';

interface TeamCardProps {
    text: string;
    img: string;
    userName: string;
    userJob: string;
}
export const TeamCard = ({text, img, userName, userJob}:TeamCardProps) => {
    return (
        <Card>
            <CardText>{text}</CardText>
            <CardUserWrapper>
                <CardUserImg src={img}/>
                <CardUserTexts>
                    <CardUserName>{userName}</CardUserName>
                    <CardUserJob>{userJob}</CardUserJob>
                </CardUserTexts>
            </CardUserWrapper>
        </Card>
    );
}
