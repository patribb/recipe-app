import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'pollo-ajillo',
        title: 'Pollo al ajillo',
        description: 'Pollo al ajillo, una receta fácil de pollo que no puede faltar en vuestro menú. Es un plato ideal para comidas y cenas, ya que el pollo es en un alimento saludable y bajo en calorías. De todos es sabido que la carne que más se consume en el mundo es la del pollo y es perfecto para dietas de adelgazamiento',
        ingredients: [
          '1 kg de pollo',
          '2 cabezas de ajos',
          '400 ml de vino blanco',
          'sal',
          'pimienta negra',
          'aceite de oliva virgen extra'
        ],
        method: [
          'Para preparar esta rico pollo al ajillo he utilizado piezas de los contramuslos de pollo partidas en 3 trozos y piezas de los jamoncitos de pollo partidas en 2 trozos.',
          'Lo primero que vamos a hacer es añadir al pollo la sal y la pimienta negra molida al gusto',
          'Echamos abundante aceite de oliva virgen extra a una sartén y la ponemos a máxima temperatura',
          'Echamos los dientes de ajo sin pelar y con una incisión en el lateral, y los freímos durante un par de minutos',
          'Antes de que el ajo se empiece a tostar, lo retiramos y lo reservamos en un plato, ya que posteriormente lo volveremos a utilizar',
          'Seguidamente, añadimos el pollo a la sartén, tapamos y lo freímos',
          'Al tapar la sartén vamos a conseguir que tarde menos en freírse nuestro pollo al ajillo y que no nos salte el aceite.',
          'Debemos freír el pollo en tandas, yo lo repartí en 3 tandas. Si introducimos todos los trozos, el pollo bajará la temperatura del aceite y, en lugar de freírse, se cocerá.',
          'Cuando tengamos el pollo bien frito, quitamos la mitad del aceite de la sartén y bajamos la temperatura a 6 o 7 sobre 9',
          'Incorporamos de nuevo el pollo y los ajos, añadimos el vaso de vino blanco y un poco de perejil cortado muy finito.',
          'Cuando todos los trozos de pollo estén en contacto con el vino y ninguno superpuesto, tapamos la sartén.',
          'Cocinamos el pollo al ajillo durante unos 8 minutos, aproximadamente, y dejamos que reduzca el líquido.',
          'Transcurrido el tiempo, retiramos la tapa y emplatamos.',
          'Colocamos el pollo y los ajos sobre una bandeja y agregamos un poco de salsa por encima'
        ]
      },
      {
        slug: 'estofado-ternera',
        title: 'Estofado de Ternera',
        description: 'Esta receta de estofado de ternera es, sin duda, todo un recetón de nuestra cocina tradicional, un plato sencillo pero muy sabroso, como se suele decir, una receta de las de unta pan y moja',
        ingredients: [
          '700 gr de carne de ternera en tacos ( preferiblemente de aguja o de morcillo)',
          '1 cebolla',
          '2 tomates maduros',
          '2 zanahorias',
          '2 dientes de ajo',
          '1 cucharada de harina',
          '25 ml de brandy',
          '125 ml de vino blanco',
          '2 hojas de laurel',
          '1 cucharadita de tomillo',
          'perejil recién picado',
          'sal y pimienta',
          'aceite de oliva'
        ],
        method: [
          'Secamos y limpiamos la carne, dejándola bien limpia de grasa y telillas. A continación la aliñamos, añadiéndole sal y pimienta al gusto',
          'Pasamos ya al fuego y ponemos a calentar en una olla o en una cazuela con un buen chorro de aceite de oliva, que cubra bien el fondo. Cuando esté bien caliente, incorporamos la mitad de los tacos de carne para sellarlos. A fuego medio-fuerte cocinaremos la carne durante apenas unos minutos por cada lado. La idea es que, simplemente, doremos la carne por la superficie, más adelante terminaremos de cocinarla por dentro, junto con la salsa. Una vez que tengamos los tacos de carne dorados a nuestro gusto, los retiramos a una fuente o a un plato hondo y los reservamos. Repetimos el procedimiento con la mitad de carne que nos queda.',
          'El siguiente paso será preparar un buen sofrito con las verduras. Lo haremos en la misma olla o cazuela (incorporando o retirando aceite si es necesario). Incorporaremos la cebolla troceada muy finita, las zanahorias cortadas en rodajas y una pizca de sal, para que suden las verduras. Cocinaremos a fuego suave durante unos 2 ó 3 minutos y añadiremos también los ajos troceados. Seguiremos pochando todo junto, a fuego muy suave y sin prisas, removiendo de vez en cuando para que se cocinen uniformemente las verduras. Cuando las tengamos tiernas (antes de que empiecen a tostarse), añadimos también un par de tomates rallados. Cocinaremos junto con el resto de verduras, a fuego medio, hasta que se haya reducido el líquido.',
          'Agregaremos ahora hierbas aromáticas al gusto, en mi caso una cucharadita de tomillo y un par de hojitas de laurel, y mezclaremos bien con el sofrito.',
          'Incorporaremos de nuevo los tacos de carne, sin olvidarnos de añadir también todo el jugo que hayan soltado en la fuente. Regaremos primero con el brandy y después con el vino blanco y cocinaremos unos minutos a fuego vivo, hasta que se reduzca el líquido y se evapore el alcohol.',
          'Bajaremos de nuevo el fuego y añadiremos una cucharada de harina, que hará que la salsa nos quede luego espesita. Saltearemos todo junto durante un par de minutos más.',
          'Solo nos queda añadir el caldo para la cocción del guiso y la cantidad dependerá de si el estofado lo cocinamos en olla exprés o en cazuela',
          'Una vez realizada la cocción, en olla o cazuela, comprobamos el punto de sazón y la consistencia de la salsa para corregirlos si es necesario. Para terminar, añadimos una pizca de perejil recién picado y emplatamos para servir en caliente',
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  }
})
