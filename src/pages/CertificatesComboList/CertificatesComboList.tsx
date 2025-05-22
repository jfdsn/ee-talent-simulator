import { ClassCertificateCard } from "../../components/ClassCertificateCard/ClassCertificateCard";
import rawData from "../../data/certificate-combo-data.json"
import { ColorClassGroup } from '../../types/certificate-types'
import { CardsContainer, MainContentContainer } from "./style";

export const CertificatesComboList = () => {
    const comboData = rawData as ColorClassGroup;

    return (
        <MainContentContainer>
            <h1>Certificate Combo</h1>
            {Object.entries(comboData).map(([color, classes]) => (
                <CardsContainer key={color} $classColor={color}>
                    {Object.entries(classes).map(([classId, classData]) => (
                        <ClassCertificateCard key={classId} data={classData}/>                      
                    ))}
                </CardsContainer>
            ))}
        </MainContentContainer>
    )
}