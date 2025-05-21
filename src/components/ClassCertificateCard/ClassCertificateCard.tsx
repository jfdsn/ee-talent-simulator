import { ClassCombos } from "../../types/certificate-types";
import { CertificateCombo } from "../CertificateCombo/CertificateCombo";

type ClassCertificateCardProps = {
    data: ClassCombos;
}

export const ClassCertificateCard: React.FC<ClassCertificateCardProps> = ({data: { className, image, combos }}) => {
    return (
        <div>
            <div>
                <h3>{className}</h3>
                <img src={image} alt={`${className} image`} />
            </div>
            <>
                {combos.map(cb => (
                    <CertificateCombo key={cb.combo.id} data={cb} />
                ))}
            </>
        </div>
    )
}