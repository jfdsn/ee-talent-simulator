import { ClassCertificateCard } from "../../components/ClassCertificateCard/ClassCertificateCard";
import rawData from "../../data/certificate-combo-data.json"
import { ColorClassGroup } from '../../types/certificate-types'

export const CertificatesComboList = () => {
    const comboData = rawData as ColorClassGroup;

    return (
        <div>
            <h1>Certificates</h1>
            {Object.entries(comboData).map(([color, classes]) => (
                <div key={color}>
                    <h2>{color}</h2>
                    {Object.entries(classes).map(([classId, classData]) => (
                        <ClassCertificateCard key={classId} data={classData}/>                      
                    ))}
                </div>
            ))}
        </div>
    )
}