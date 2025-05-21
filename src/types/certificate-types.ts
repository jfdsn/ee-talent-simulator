export type Certificate = {
    id: string;
    name: string;
    image: string;
    description: string;
}

export type CertificateCombo = {
    certificate1Id: string; //ID do certificado na lista de certificados
    certificate2Id: string; //ID do certificado na lista de certificados
    combo: {
        id: string;
        name: string;
        description: string;
    }
}

export type ClassCombos = {
    classId: string;
    className: string;
    image: string;
    combos: CertificateCombo[];
}

export  type ClassColor = 'yellow' | 'orange' | 'green' | 'blue' | 'purple'

export type ColorClassGroup = {
    [color in ClassColor]: {
        [classId: string]: ClassCombos;
    }
}