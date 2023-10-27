const productsData = [
    {
        id: 1,
        name: "Galaxy S23 FE 5G",
        price: 3700,
        category: "Samsung",
        description: "O Galaxy S23 FE foi lançado em 04/10/2023 e é equipado com o processador Samsung Exynos 2200 (4 nm) - no mundo - EUA e Canadá será Snapdragon 8 Gen 1. Possui 8 GB de memória RAM e está disponível em versões de armazenamento interno de 128 GB e 256 GB. Isso garante um desempenho excelente para rodar jogos e aplicativos sem travamentos.",
        imageUrl: "https://t.ctcdn.com.br/VpjzDzvvX6g_0PFrdmiNueTUFrQ=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i811273.png",
    },
    {
        id: 2,
        name: "Galaxy M34 5G",
        price: 1400,
        category: "Samsung",
        description: "O Samsung Galaxy M34 5G é um celular da Samsung, apresentado mundialmente em 07/07/2023, chegou ao Brasil no dia 20/09/2023 custando R$ 2.699,00. Possui o processador Samsung Exynos 1280 (5nm). Ele está disponível em duas variantes de memória RAM, com opções de 6 GB e 8 GB, e capacidade de armazenamento interno de 128 GB e 256 GB, com suporte para expansão através de microSDXC.",
        imageUrl: "https://t.ctcdn.com.br/qH5rDAxY70NvkPR-IH4IpeFlmI8=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i765876.png",
    },
    {
        id: 3,
        name: "Galaxy F34",
        price: 1300,
        category: "Samsung",
        description: "O Samsung Galaxy F34 é um celular da Samsung, lançado em 07/08/2023. O smartphone vem com Android 13 e One UI 5.1, tem opções de 6 GB e 8 GB de memória RAM e 128 GB de armazenamento interno. Seu processador é um Samsung Exynos 1280 (5nm). O celular conta com uma tela Super AMOLED de 6.5 polegadas com suporte a 120 Hz.",
        imageUrl: "https://t.ctcdn.com.br/mkVzAy3wD2yA2sYuLOD9oy73D4c=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i782294.png",
    },

    {
        id: 4,
        name: "Galaxy Z Flip 5",
        price: 5000,
        category: "Samsung",
        description: "A Samsung em 2023 trouxe como melhoria a tela externa maior. Algo que vimos também em outros celulares Flip, virou tendência e agora as pessoas querem usar uma tela pequena quadrada sem abrir o celular. O novo dobrável chegou em 26 de julho de 2023, com Snapdragon 8 Gen 2, 8GB de RAM e versões de 256 ou 512GB de armazenamento interno. O celular conta com uma tela Foldable Dynamic AMOLED 2X de 6.7 polegadas, 120Hz de taxa de atualização, com suporte a 1200 nits (pico), HDR 10 Plus e uma tela externa: Super AMOLED 3.4 polegadas com proteção Gorilla Glass Victus.",
        imageUrl: "https://t.ctcdn.com.br/lYIPsl4GSwmbWyi8_ZuGXfFnhD8=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i778894.png",
    },

    {
        id: 5,
        name: "iPhone 15 Pro Max",
        price: 7300,
        category: "Apple",
        description: " o iPhone 15 Pro Max tem uma tela Super Retina XDR de 6,7 polegadas1 com a Dynamic Island. A parte de trás é de vidro matte texturizado, com uma moldura de titânio de bordas arredondadas ao redor da estrutura. O botão de Ação está no lado superior esquerdo e o botão lateral está no lado direito do dispositivo. Na parte traseira, há três câmeras: ultra-angular, grande-angular e teleobjetiva. Há um Scanner LiDAR na parte de trás. Há um flash True Tone de LED na parte de trás. Nos Estados Unidos, não há bandeja do SIM. Em outros países ou regiões, há uma bandeja do SIM no lado esquerdo que comporta um cartão nano-SIM quarto fator forma (4FF). Na parte inferior, há um conector USB-C para carregar e transferir dados.",
        imageUrl: "https://t.ctcdn.com.br/arAcG1Ve7ILecoPj6DL9LNeLLHM=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i798971.png",
    },

    {
        id: 6,
        name: "iPhone 15 Plus",
        price: 10000,
        category: "Apple",
        description: " o iPhone 15 Plus tem uma tela Super Retina XDR de 6,7 polegadas1 com a Dynamic Island. A parte de trás é de vidro colorido por infusão, com uma moldura de alumínio anodizado de bordas arredondadas ao redor da estrutura. O botão lateral está no lado direito do dispositivo. Na parte traseira, há duas câmeras: ultra-angular e grande-angular. Nos Estados Unidos, não há bandeja do SIM. Em outros países ou regiões, há uma bandeja do SIM no lado esquerdo que comporta um cartão nano-SIM quarto fator forma (4FF). Na parte inferior, há um conector USB-C para carregar e transferir dados.",
        imageUrl: "https://t.ctcdn.com.br/nzCmxo-uoXfh46IWBv8hYQAgGTY=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i798967.png",
    },

    {
        id: 7,
        name: "iPhone SE (3ª geração)",
        price: 3800,
        category: "Apple",
        description: "a tela tem 4,7 polegadas (na diagonal). O vidro frontal é plano com bordas curvadas. A parte traseira é de vidro, com uma moldura de alumínio anodizado ao redor da estrutura. O botão lateral está no lado direito do dispositivo. O dispositivo tem um botão de Início sólido com Touch ID. Na parte de trás, há uma câmera grande-angular de 12 MP. O flash True Tone de LED fica na parte de trás, e a bandeja do SIM, compatível com cartões nano-SIM (também conhecidos como 4FF, quarto fator forma), fica na lateral direita.  O IMEI está gravado na bandeja do SIM.",
        imageUrl: "https://www.western.co.uk/wp-content/uploads/2022/03/Product-Image-Template.png",
    },

    {
        id: 8,
        name: "iPhone XS",
        price: 3200,
        category: "Apple",
        description: "o iPhone XS tem uma tela Super Retina sem bordas de 5,8 polegadas1. A parte traseira é de vidro, com uma moldura de aço inoxidável ao redor da estrutura. O botão lateral está no lado direito do dispositivo. Na parte traseira, há câmeras de 12 MP com lentes grande-angular e teleobjetiva. O flash True Tone de quatro LEDs fica na parte traseira, e a bandeja do SIM, compatível com cartões nano-SIM (também conhecidos como 4FF, quarto fator forma), fica na lateral direita. O IMEI está gravado na bandeja do SIM",
        imageUrl: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/P0YAAOSwmOBijK4d/$_1.PNG",
    },

    {
        id: 9,
        name: "Edge 40 Neo",
        price: 2700,
        category: "Motorola",
        description: "O smartphone Motorola Edge 40 Neo, lançado em 14/09/2023, apresenta diversas características impressionantes: Ele conta com o processador MediaTek Dimensity 7030 (6nm), que oferece alta performance. A memória RAM está disponível em opções de 8 GB e 12 GB, garantindo um desempenho suave para jogos e aplicativos. Além disso, possui armazenamento interno de 128 GB e 256 GB, permitindo armazenar muitas fotos e aplicativos sem problemas de espaço.",
        imageUrl: "https://t.ctcdn.com.br/ySiwfS-IdsQGr-WQglE_y5scPUY=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i669258.png",
    },

    {
        id: 10,
        name: "Moto G54",
        price: 1400,
        category: "Motorola",
        description: "O Moto G54 5G conta com o processador MediaTek Dimensity 7020 5G que é o novo chipset da MediaTek que deve balançar o mercado de intermediários baratinhos. Aliado a isso temos duas opções de capacidades de memória sendo elas: Uma mais modesta com 128GB de espaço interno e 4GB de RAM e uma outra que vai chamar muito a atenção do pessoal.",
        imageUrl: "https://claroperupoc.vtexassets.com/arquivos/ids/1368423/motorola-g54-g5-green-front-double.png?v=638325687553600000",
    },

    {
        id: 11,
        name: "Moto G84",
        price: 2000,
        category: "Motorola",
        description: "O Motorola Moto G84 é um smartphone lançado pela Motorola em 14/09/2023, tem o processador Qualcomm Snapdragon 695 5G (6 nm). Em conjunto, ele conta com 8 GB de memória RAM, capacidade total para rodar bem jogos e aplicativos da loja sem travamentos. Em armazenamento interno, contamos com 256 GB, oferecendo espaço suficiente para guardar várias fotos e vídeos e baixar bastante apps sem a necessidade de apagar por falta de espaço.",
        imageUrl: "https://claroperupoc.vtexassets.com/arquivos/ids/1336243/04--1-.png?v=638315325453100000",
    },

    {
        id: 12,
        name: "Moto G14",
        price: 1000,
        category: "Motorola",
        description: "O Moto G14 apresenta uma tela LCD de 6,5 polegadas com resolução FullHD+ (1080 x 2400 pixels). A tela possui um display com um pequeno furo para a câmera frontal de 8 MP e conta com uma taxa de atualização básica travada em 60 Hz, o que pode não ser tão suave para quem está acostumado com dispositivos que operam com taxas de atualização mais altas.",
        imageUrl: "https://t.ctcdn.com.br/UUk2-GZ8JKjR8s6cVQ5_5fkeO8E=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i778974.png",
    },
];

export default productsData;
