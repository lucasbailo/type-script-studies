import Button from "../Button";
import Watch from "./Watch";
import style from './Crono.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITasks } from "../../types/task";
import { useEffect, useState } from "react";


interface Props {
    selecionado: ITasks | undefined, 
    finalizarTarefa: () => void
}

export default function Crono({selecionado, finalizarTarefa} : Props) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador -1)
            }
            finalizarTarefa()
        }, 1000)
        
    }

    return(
        <div className={style.cronometro}>
            <p 
                className={style.titulo}
            >
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Watch tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar
            </Button>
            
        </div>
    )
}