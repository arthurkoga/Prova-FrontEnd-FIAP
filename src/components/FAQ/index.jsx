import styles from './faq.module.css'

export function FAQ() {
    return(
        <div className={styles.container}>
            <h1>FAQ</h1>
            <h2>Dúvidas Frequentes</h2>
            <div className={styles.box}>
                <div className={styles.item}>
                    <hr />
                    <h3>QUANDO POSSO ME MATRICULAR</h3>
                    <p>
                    Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.
                    </p>
                </div>
                <div className={styles.item}>
                    <hr />
                    <h3>POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</h3>
                    <p>
                    Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.
                    </p>
                </div>
                <div className={styles.item}>
                    <hr />
                    <h3>QUAIS OS PRÉ-REQUISITOS?</h3>
                    <p>
                    Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.
                    </p>
                </div>
                <div className={styles.item}>
                    <hr />
                    <h3>QUAL A DURAÇÃO DOS CURSOS?</h3>
                    <p>
                    De 6 a 42 horas.
                    </p>
                </div>
                <div className={styles.item}>
                    <hr />
                    <h3>PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</h3>
                    <p>
                    Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.
                    </p>
                </div>
                <div className={styles.item}>
                    <hr />
                    <h3>VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</h3>
                    <p>
                    Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.
                    </p>
                </div>
            </div>
        </div>
    )
}