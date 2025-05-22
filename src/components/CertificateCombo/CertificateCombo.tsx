import { CertificateComboData, Certificate } from "../../types/certificate-types";
import rawData from "../../data/certificate-list-data.json";
import { Tooltip } from "../Tooltip/Tooltip";
import { ComboContainer } from "./style";


type CertificateComboProps = {
    data: CertificateComboData;
}

const certificateList = rawData as Certificate[]

export const CertificateCombo: React.FC<CertificateComboProps> = ({data: { certificate1Id, certificate2Id, combo}}) => {
    const certificate1 = getCertificateById(certificate1Id);
    const certificate2 = getCertificateById(certificate2Id);
    
    if(!certificate1 || !certificate2) return null;

    return (
        <ComboContainer>
            <Tooltip title={certificate1.name} description={certificate1.description}>
                <img className="cert" src={certificate1.image} alt={`${certificate1.name} icon`} />
            </Tooltip>
            <Tooltip title={combo.name} description={combo.description}>
                <img className="icon" src='/combo-icon.webp' alt='Combo icon' />
            </Tooltip>
            <Tooltip title={certificate2.name} description={certificate2.description}>
                <img className="cert" src={certificate2.image} alt={`${certificate2.name} icon`} />
            </Tooltip>
        </ComboContainer>
    )
}


const getCertificateById = (id: string): Certificate | undefined => {
    return certificateList.find(cert => cert.id === id);
}