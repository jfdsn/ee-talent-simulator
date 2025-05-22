import { ClassCombos } from "../../types/certificate-types";
import { CertificateCombo } from "../CertificateCombo/CertificateCombo";
import { CardContainer, ClassBanner, ComboSection } from "./style";

type ClassCertificateCardProps = {
    data: ClassCombos;
}

export const ClassCertificateCard: React.FC<ClassCertificateCardProps> = ({data: { className, image, combos }}) => {
    return (
        <CardContainer
            key={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <ClassBanner>
                <h2>{className}</h2>
                <img src={image} alt={`${className} icon`} />
            </ClassBanner>
            <ComboSection>
                {combos.map(cb => (
                    <CertificateCombo key={cb.combo.id} data={cb} />
                ))}
            </ComboSection>
        </CardContainer>
    )
}