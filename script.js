/* =====================================================
   INFORMACIÓN DE LOS CONCEPTOS
===================================================== */

const conceptos = {


    mecanica: {

        icono: "",

        imagen:
            "imagenes/m.jpg",

        titulo: "Mecánica",

        texto: `
            La mecánica es la rama de la física que estudia
            el movimiento, el equilibrio y las fuerzas que
            actúan sobre los cuerpos.
        `,

        extra: `
            Se divide principalmente en estática y dinámica.
            La estática estudia los cuerpos en equilibrio,
            mientras que la dinámica estudia los cuerpos
            en movimiento.
        `

    },


    estatica: {

        icono: "",

        titulo: "Estática",

        imagen:
            "imagenes/estatica.jpg",

        texto: `
            La estática es la rama de la física y de la
            mecánica que estudia los cuerpos rígidos o ideales
            que se encuentran en reposo o en equilibrio.
        `,

        formula: `
            ΣF = 0
        `,

        formula2: `
            ΣM = 0
        `,

        extra: `
            Para que un cuerpo permanezca en equilibrio,
            la suma de todas las fuerzas aplicadas debe ser
            igual a cero y la suma de todos los momentos
            también debe ser nula.
        `,

        ejemplo: `
            Un libro colocado sobre una mesa permanece
            en reposo porque las fuerzas que actúan sobre
            él están equilibradas.
        `

    },


    dinamica: {

        icono: "",

        titulo: "Dinámica",

        imagen:
            "imagenes/dinamica.jpg",

        texto: `
            La dinámica es la subdivisión de la mecánica
            que estudia los cuerpos en movimiento.
        `,

        formula: `
            F = ma
        `,

        extra: `
            Analiza cómo las fuerzas aplicadas sobre un
            objeto provocan cambios en su velocidad,
            aceleración o dirección.
        `,

        ejemplo: `
            Al empujar un automóvil se aplica una fuerza
            que puede producir una aceleración.
        `

    },


    principios: {

        icono: "",

        imagen:
            "imagenes/p.jpg",

        titulo:
            "Fundamental Principles",

        texto: `
           The fundamental principles of mechanics 
           are directly related to the three laws 
           of motion formulated by Isaac Newton.
        `,

        extra: `
            These laws help understand the relationship 
            between force, mass, motion, and the 
            interactions between bodies.
        `

    },


    principio1: {

        icono: "",

        titulo:
            "Primer principio — Ley de la Inercia",

        imagen:
            "imagenes/inercia.jpg",

        texto: `
            Todo cuerpo mantiene su estado de reposo o
            continúa moviéndose en línea recta con velocidad
            constante mientras no actúe sobre él una
            fuerza externa neta.
        `,

        formula: `
            ΣF = 0 → a = 0
        `,

        extra: `
            La inercia es la tendencia de los cuerpos a
            conservar su estado de movimiento.
        `,

        ejemplo: `
            Un libro sobre una mesa permanecerá inmóvil
            hasta que una fuerza externa actúe sobre él.
        `

    },


    principio2: {

        icono: "",

        titulo:
            "Segundo principio — Fuerza y aceleración",

        imagen:
            "imagenes/fuerza-aceleracion.jpg",

        texto: `
            La aceleración de un objeto es directamente
            proporcional a la fuerza neta aplicada e
            inversamente proporcional a su masa.
        `,

        formula: `
            F = ma
        `,

        extra: `
            Al aumentar la fuerza aplicada sobre un cuerpo,
            aumenta su aceleración. Al aumentar la masa
            manteniendo la misma fuerza, la aceleración
            disminuye.
        `,

        ejemplo: `
            Un automóvil ligero puede acelerar más que
            uno pesado cuando ambos reciben la misma fuerza.
        `

    },


    principio3: {

        icono: "",

        titulo:
            "Tercer principio — Acción y reacción",

        imagen:
            "imagenes/accion-reaccion.jpg",

        texto: `
            Cuando un cuerpo ejerce una fuerza sobre otro,
            el segundo cuerpo ejerce simultáneamente una
            fuerza de igual magnitud y dirección, pero
            de sentido contrario.
        `,

        formula: `
            F₁₂ = −F₂₁
        `,

        extra: `
            Las fuerzas de acción y reacción aparecen
            simultáneamente y actúan sobre cuerpos diferentes.
        `,

        ejemplo: `
            Al saltar sobre un trampolín, una persona ejerce
            una fuerza hacia abajo y el trampolín responde
            con una fuerza hacia arriba.
        `

    }

};



/* =====================================================
   ELEMENTOS
===================================================== */

const nodos =
    document.querySelectorAll(".nodo");

const panelInfo =
    document.getElementById("panelInfo");



/* =====================================================
   EXPERIMENTOS
===================================================== */

const experimentos = {

    estatica:
        document.getElementById(
            "experimento-estatica"
        ),

    dinamica:
        document.getElementById(
            "experimento-dinamica"
        ),

    principio1:
        document.getElementById(
            "experimento-principio1"
        ),

    principio2:
        document.getElementById(
            "experimento-principio2"
        ),

    principio3:
        document.getElementById(
            "experimento-principio3"
        )

};



/* =====================================================
   CREAR IMAGEN
===================================================== */

function crearImagen(concepto) {


    if (!concepto.imagen) {

        return `

            <div class="imagen-contenedor">

                <div class="placeholder-imagen">

                    <div class="icono-imagen">
                        📚
                    </div>

                    <strong>
                        Espacio para imagen
                    </strong>

                    <small>
                        Puedes agregar una imagen
                        relacionada con este concepto.
                    </small>

                </div>

            </div>

        `;

    }


    return `

        <div class="imagen-contenedor">

            <img
                src="${concepto.imagen}"
                alt="${concepto.titulo}"
                onerror="
                    this.style.display='none';
                    this.nextElementSibling.style.display='block';
                "
            >

            <div
                class="placeholder-imagen"
                style="display:none;"
            >

                <div class="icono-imagen">
                    
                </div>

                <strong>
                    Imagen pendiente
                </strong>

                <small>
                    Coloca el archivo:
                    <br>
                    ${concepto.imagen}
                </small>

            </div>

        </div>

    `;

}



/* =====================================================
   MOSTRAR INFORMACIÓN
===================================================== */

function mostrarInformacion(clave) {


    const concepto =
        conceptos[clave];


    if (!concepto) {

        return;

    }


    let contenido = `

        <div class="info-header">

            <span class="info-icono">
                ${concepto.icono}
            </span>

            <h2>
                ${concepto.titulo}
            </h2>

        </div>


        <div class="info-layout">


            ${crearImagen(concepto)}


            <div>

                <p class="info-texto">
                    ${concepto.texto}
                </p>

    `;



    /* FÓRMULA */

    if (concepto.formula) {

        contenido += `

            <div class="info-box">

                <strong>
                    Fórmula
                </strong>

                <div class="formula-grande">

                    ${concepto.formula}

                </div>

        `;


        if (concepto.formula2) {

            contenido += `

                <div class="formula-grande">

                    ${concepto.formula2}

                </div>

            `;

        }


        contenido += `

            </div>

        `;

    }



    /* INFORMACIÓN EXTRA */

    if (concepto.extra) {

        contenido += `

            <div class="info-box">

                <strong>
                    Información importante
                </strong>

                <p class="info-texto">

                    ${concepto.extra}

                </p>

            </div>

        `;

    }



    /* EJEMPLO */

    if (concepto.ejemplo) {

        contenido += `

            <div class="info-box">

                <strong>
                     Ejemplo
                </strong>

                <p class="info-texto">

                    ${concepto.ejemplo}

                </p>

            </div>

        `;

    }


    contenido += `

            </div>

        </div>

    `;


    panelInfo.innerHTML =
        contenido;


    panelInfo.style.opacity =
        "0";

    panelInfo.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        panelInfo.style.transition =
            "0.35s";

        panelInfo.style.opacity =
            "1";

        panelInfo.style.transform =
            "translateY(0)";

    }, 30);

}



/* =====================================================
   MOSTRAR EXPERIMENTO CORRESPONDIENTE
===================================================== */

function mostrarExperimento(clave) {


    /*
       Primero ocultamos todos
       los experimentos.
    */

    Object.values(experimentos).forEach(
        experimento => {

            if (experimento) {

                experimento.classList.remove(
                    "activo"
                );

            }

        }
    );


    /*
       Después mostramos únicamente
       el experimento relacionado
       con el concepto seleccionado.
    */

    if (experimentos[clave]) {

        experimentos[clave].classList.add(
            "activo"
        );


        /*
           Esperamos un poco para que
           el navegador termine de mostrar
           la sección antes de desplazarse.
        */

        setTimeout(() => {

            experimentos[clave].scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 150);

    }

}



/* =====================================================
   CLIC EN LOS NODOS
===================================================== */

nodos.forEach(nodo => {


    nodo.addEventListener(
        "click",
        () => {

            const concepto =
                nodo.dataset.concepto;


            /*
               Mostrar la información.
            */

            mostrarInformacion(
                concepto
            );


            /*
               Mostrar únicamente
               el experimento relacionado.
            */

            mostrarExperimento(
                concepto
            );

        }
    );

});



/* =====================================================
   02 — ESTÁTICA
===================================================== */

const peso =
    document.getElementById("peso");

const pesoValor =
    document.getElementById("pesoValor");

const normalValor =
    document.getElementById("normalValor");

const pesoEcuacion =
    document.getElementById("pesoEcuacion");


function actualizarEstatica() {


    const valor =
        Number(peso.value);


    pesoValor.textContent =
        valor;


    normalValor.textContent =
        valor;


    pesoEcuacion.textContent =
        valor;

}


peso.addEventListener(
    "input",
    actualizarEstatica
);



/* =====================================================
   03 — DINÁMICA
===================================================== */

const fuerzaDinamica =
    document.getElementById(
        "fuerzaDinamica"
    );


const fuerzaDinamicaValor =
    document.getElementById(
        "fuerzaDinamicaValor"
    );


const aceleracionDinamica =
    document.getElementById(
        "aceleracionDinamica"
    );


const auto =
    document.getElementById(
        "auto"
    );


function actualizarDinamica() {


    const F =
        Number(
            fuerzaDinamica.value
        );


    const masa =
        10;


    const aceleracion =
        F / masa;


    fuerzaDinamicaValor.textContent =
        F;


    aceleracionDinamica.textContent =
        aceleracion.toFixed(2);


    const movimiento =
        Math.min(
            aceleracion * 12,
            500
        );


    auto.style.transform =
        `translateX(${movimiento}px)`;

}


fuerzaDinamica.addEventListener(
    "input",
    actualizarDinamica
);



/* =====================================================
   04 — PRIMERA LEY / INERCIA
===================================================== */

const botonInercia =
    document.getElementById(
        "botonInercia"
    );


const objetoInercia =
    document.getElementById(
        "objetoInercia"
    );


const mensajeInercia =
    document.getElementById(
        "mensajeInercia"
    );


let inerciaActivada =
    false;


botonInercia.addEventListener(
    "click",
    () => {


        if (!inerciaActivada) {


            objetoInercia.style.transform =
                "translateX(400px)";


            mensajeInercia.textContent =
                "Se aplicó una fuerza. El objeto comenzó a moverse.";


            botonInercia.textContent =
                "Restablecer";


            inerciaActivada =
                true;


        } else {


            objetoInercia.style.transform =
                "translateX(0)";


            mensajeInercia.textContent =
                "El objeto está nuevamente en reposo.";


            botonInercia.textContent =
                "Aplicar fuerza";


            inerciaActivada =
                false;

        }

    }
);



/* =====================================================
   05 — SEGUNDA LEY
===================================================== */

const fuerza =
    document.getElementById(
        "fuerza"
    );


const masa =
    document.getElementById(
        "masa"
    );


const fuerzaValor =
    document.getElementById(
        "fuerzaValor"
    );


const masaValor =
    document.getElementById(
        "masaValor"
    );


const aceleracion =
    document.getElementById(
        "aceleracion"
    );


const objetoFuerza =
    document.getElementById(
        "objetoFuerza"
    );


function calcularFuerza() {


    const F =
        Number(
            fuerza.value
        );


    const m =
        Number(
            masa.value
        );


    const a =
        F / m;


    fuerzaValor.textContent =
        F;


    masaValor.textContent =
        m;


    aceleracion.textContent =
        a.toFixed(2);


    const movimiento =
        Math.min(
            a * 12,
            450
        );


    objetoFuerza.style.transform =
        `translateX(${movimiento}px)`;

}


fuerza.addEventListener(
    "input",
    calcularFuerza
);


masa.addEventListener(
    "input",
    calcularFuerza
);



/* =====================================================
   06 — TERCERA LEY
===================================================== */

const botonReaccion =
    document.getElementById(
        "botonReaccion"
    );


const cuerpoIzquierdo =
    document.getElementById(
        "cuerpoIzquierdo"
    );


const cuerpoDerecho =
    document.getElementById(
        "cuerpoDerecho"
    );


const flecha1 =
    document.getElementById(
        "flecha1"
    );


const flecha2 =
    document.getElementById(
        "flecha2"
    );


const ecuacionReaccion =
    document.getElementById(
        "ecuacionReaccion"
    );


let reaccionActivada =
    false;


botonReaccion.addEventListener(
    "click",
    () => {


        if (!reaccionActivada) {


            cuerpoIzquierdo.style.transform =
                "translateX(45px)";


            cuerpoDerecho.style.transform =
                "translateX(-45px)";


            flecha1.style.opacity =
                "1";


            flecha2.style.opacity =
                "1";


            ecuacionReaccion.innerHTML =
                "F₁₂ = −F₂₁";


            botonReaccion.textContent =
                "Restablecer";


            reaccionActivada =
                true;


        } else {


            cuerpoIzquierdo.style.transform =
                "translateX(0)";


            cuerpoDerecho.style.transform =
                "translateX(0)";


            flecha1.style.opacity =
                "0";


            flecha2.style.opacity =
                "0";


            botonReaccion.textContent =
                "Aplicar acción";


            reaccionActivada =
                false;

        }

    }
);



/* =====================================================
   MODO OSCURO
===================================================== */

const modoBtn =
    document.getElementById(
        "modoBtn"
    );


modoBtn.addEventListener(
    "click",
    () => {


        document.body.classList.toggle(
            "oscuro"
        );


        const oscuro =
            document.body.classList.contains(
                "oscuro"
            );


        modoBtn.textContent =
            oscuro
            ? "☀️"
            : "🌙";

    }
);



/* =====================================================
   INICIALIZAR
===================================================== */

actualizarEstatica();

actualizarDinamica();

calcularFuerza();