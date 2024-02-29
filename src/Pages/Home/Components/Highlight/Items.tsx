import React from 'react'

import pro1 from '../../../../assets/images/highlight/pro1.jpeg'
import pro2 from '../../../../assets/images/highlight/pro2.jpeg'
import pro3 from '../../../../assets/images/highlight/pro3.jpeg'
import pro4 from '../../../../assets/images/highlight/pro4.jpeg'
import pro5 from '../../../../assets/images/highlight/pro5.jpeg'
import pro6 from '../../../../assets/images/highlight/pro6.jpeg'
import vro1 from '../../../../assets/images/highlight/vro1.mp4'



export type ItemType = {
    Name: string,
    Caption: any,
    contentPosition: "left" | "right" | "middle",
    Items: { Name: string, Image: string, Type?: 'Text' | 'Video' | 'Image' }[]
}
const items: ItemType[] = [
    {
        Name: "Programa Laboratório de Talentos - Agosto 2023",
        Caption: "",
        contentPosition: "left",
        Items: [
            
            
            {
                Name: "",
                Image: pro2
            },
            {
                Name: "",
                Image: pro1
            }
        ]
    },
    {
        Name: "Programa Mentoria Financeira - Novembro 2023",
        Caption: "",
        contentPosition: "right",
        Items: [
            {
                Name: "",
                Image: pro4
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: vro1,
                Type: 'Video'
            }
        ]
    },
    {
        Name: "",
        Caption: <><b>Programa de Preparação de Consultores Empresariais - Abril de 2024</b><br/> <b>Objectivo:</b> " Desenvolvimento de habilidade sobre técnicas e ferramentas para prestação de serviços de consultoria em gestão e transformação organizacional." <br/><b> Benefícios:</b>      <ul><li>   "Certificado de participação;"</li><li>        Estágio profissional na Everest LDA e numa empresa de contabilidade (aplicável somente aos 4 melhores participantes);</li><li> Mentoria individual com consultores financeiros e de investimentos (aplicável somente aos 4 melhores participantes)."</li></ul></>,
        contentPosition: "middle",
        Items: [
            {
                Name: "",
                Image: pro3
            },
            {
                Name: "",
                Image: pro6
            }
        ]
    }
]


export default items
