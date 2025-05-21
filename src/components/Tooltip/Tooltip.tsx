import { TooltipContainer, TooltipText, Title, Description } from "./style";


type TooltipProps = {
    title: string;
    description: string;
    children: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ title, description, children }) => {
    return (
        <TooltipContainer>
            {children}
            <TooltipText>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TooltipText>
        </TooltipContainer>
    ) 
}