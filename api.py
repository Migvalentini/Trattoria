import requests

#response = requests.post('https://trattoria-three.vercel.app/post', json={'sql':"delete from Compradores where id = 70;"})
#print(response.json()['json'])

compradores = [
    [2, 'Marilene Grisa Gaiardo ', '54991422200', '53432649053', 'maricomercial@outlook.com', 'pago', '220'],
    [6, 'Neila Bortolatto', '54999340027', '65165481072', 'neilabortolatto@hotmail.com', 'pago', '550'],
    [8, 'EDERSON DE ALMEIDA PEDRO', '54984051539', '00473991047', 'eapedro@ucsbr', 'pago', '220'],
    [9, 'Ana Paula Einsfeld', '54992012265', '02731233001', 'anapeinsfeld@gmail.com', 'pago', '385'],
    [10, 'Lais koche Diretora ', '54991131176', '02046886046', 'lakoche@ucs.br', 'nao-pago', '550'],
    [12, 'Marlei Bossle', '54992687575', '55142184068', 'marleibossle@hotmail.com', 'pago', '110'],
    [13, 'Rafaela viecelli', '54991611677', '60994177020', 'rafaelaviecelli@gmail.com', 'pago', '440'],
    [14, 'Roseli Silva ', '54999763868', '64200906015', 'rose.aze.silva@gmail.com', 'pago', '330'],
    [20, 'isabeli padilha', '54981629209', '05687108009', 'ispadilha@ucs.br', 'pago', '440'],
    [21, 'Melissa Fonseca ', '54996641009', '01563605007', 'mel.ballet@hotmail.com', 'pago', '220'],
    [22, 'Iraja Fonseca', '54999594974', '00328582050', 'comemorarecxs@gmail.com', 'pago', '220'],
    [25, 'Rosangela Cabral de Jesus ', '54996288650', '92146988053', 'rosycabraldejesus@yahoo.com.br', 'pago', '220'],
    [26, 'Gabriel Daros da Silva ', '54991567962', '05454044016', 'gds032005@gmail.com', 'pago', '220'],
    [27, 'Kellen Corso ', '54999629182', '00687814073', 'Kellencorso@gmail.com', 'pago', '110'],
    [31, 'Lais koche isabeli', '54981629209', '05681708009', 'ispadilha@ucs.br', 'pago', '275'],
    [35, 'Jairo Jose Stachowski', '54999626067', '01537398008', 'jairo.stachowski@hotmail.com', 'pago', '110'],
    [38, 'Percio Rodrigues ', '54991085713', '91844274004', 'prodrprodr@gmail.com', 'pago', '110'],
    [42, 'EVANDRO CORSO', '54991232565', '70452750059', 'ecorso@vscomp.com.br', 'pago', '220'],
    [43, 'Maria Clair dos Santos', '54991592054', '81458460053', 'mcsclair1@gmail.com', 'pago', '110'],
    [44, 'Ketlen Corso', '54996859808', '03605563023', 'ketlencorso@hotmail.com', 'pago', '110'],
    [45, 'Jhonatan Rodrigues ', '54991334154', '04958025065', 'jhonatanrodrigues1605@gmail.com', 'pago', '110'],
    [47, 'Fabio Antonio Pizzoli', '54999108820', '61822574072', 'fabio.pizzoli@gmail.com', 'pago', '110'],
    [49, 'Caio Brandalise', '54991024410', '03481334052', 'caiobrandalise@gmail.com', 'pago', '110'],
    [50, 'Fabio Antonio Pizzoli', '54999108820', '61822574072', 'fabio.pizzoli@gmail.com', 'pago', '110'],
    [51, 'Heloisa Gregoletto Duso ', '54999960768', '61799688020', 'ghelo@terra.com.br', 'pago', '330'],
    [53, 'Ana Vitoria Rodrigues ', '54999815456', '05190273024', 'anavitoriarodrigues1903@gmail.com', 'pago', '220'],
    [54, 'Julia Ribas', '54999920661', '02701690080', 'juju161317@gmail.com', 'nao-pago', '110'],
    [58, 'Adriana Camargo Forini ', '54981112810', '91140005049', 'adrianacforini@gmail.com', 'pago', '220'],
    [59, 'Julia Ribas ', '54999920661', '02701690080', 'juju161317@gmail.com', 'pago', '110'],
    [61, 'Monica Regina Galvo Ribas ', '54999920239', '83504249900', 'juju161317@gmail.com', 'pago', '110'],
    [62, 'Maria Elisa Basso Dal Bo', '54999767540', '02647205043', 'dalbomariaelisa@gmail.com', 'pago', '220'],
    [63, 'Renato Ribas ', '54996425646', '37670077034', 'juju161317@gmail.com', 'pago', '110'],
    [67, 'Ana Paula Einsfeld', '54992012265', '02731233001', 'anapeinsfeld@gmail.com', 'pago', '220'],
    [68, 'Carla Pessoa Cavalcante da Costa ', '54992735445', '02556563788', 'ccosta.carla@gmail.com', 'pago', '110'],
    [69, 'marcella viezzer ', '54999820660', '60288100026', 'marcellaviezzer80@gmail.com', 'pago', '550'],
    [71, 'IVANI DANIELESKI', '54981147524', '61502227053', 'IVA@SOLUCON.SRV.BR', 'pago', '220'],
    [72, 'Pedro Augusto Pasa Sartori', '54996235816', '01998752003', 'ppasasartori@gmail.com', 'pago', '220'],
    [74, 'Patricia Barboza Cardoso', '54996758136', '00962509094', 'pbcardoso@ucs.br', 'pago', '220'],
    [75, 'Bruna Chiaradia ', '54999733011', '00616772050', 'brunachiaradia.bc@gmail.com', 'pago', '220'],
    [78, 'Leonardo De Zorzi ', '54981117702', '88525481068', 'ldz@globalprimewood.com', 'pago', '330'],
    [79, 'Augusto Branchi Graebin', '54991134355', '02039442081', 'gutograebin@gmail.com', 'pago', '110'],
    [84, 'Fatima do Amaral Machado ', '54991373796', '57536015020', 'fatimacxs@hotmail.com', 'pago', '330'],
    [86, 'Adriano Ferrigo', '54996432226', '02945155001', 'ferrigoadriano@gmail.com', 'pago', '330'],
    [88, 'Mauricio Machado Marca', '54999998367', '01495354903', 'mmarca@trt4.jus.br', 'pago', '220'],
]

ingressos = [
    [1, 'Marilene Grisa Gaiardo ', '53432649053', 'alho', 'Tecnico: Gastronomia - Maria Eduarda Gaiardo', 'adult', 2],
    [2, 'Evandro Gaiardo ', '61066770000', 'queijo', 'Tecnico: Gastronomia - Maria Eduarda Gaiardo', 'adult', 2],
    [4, 'Janete Bortolotto', '44820984004', '', 'Tecnico: Gastronomia - Bruna Bortolatto', 'adult', 6],
    [5, 'Gabriel Bortolatto', '03567004026', '', 'Tecnico: Gastronomia - Bruna Bortolatto', 'adult', 6],
    [6, 'Neila Bortolatto', '65165381072', '', 'Tecnico: Gastronomia - Bruna Bortolatto', 'adult', 6],
    [7, 'Sergio Bortolatto', '41493850091', '', 'Tecnico: Gastronomia - Bruna Bortolatto', 'adult', 6],
    [8, 'Fernando Bortolotto', '27706834034', '', 'Tecnico: Gastronomia - Bruna Bortolatto', 'adult', 6],
    [14, 'Ana Carla Palavro', '83530525049', 'Intolerancia a gluten.', 'Tecnico: Informatica - Prof Ederson Almeida', 'adult', 8],
    [15, 'EDERSON DE ALMEIDA PEDRO', '00473991047', '', 'Professor: Ederson Almeida Pedro', 'adult', 8],
    [16, 'Lais koche Diretora', '02046886046', '', 'Professor: Ana Cristina Possap Cesa', 'adult', 10],
    [17, 'Lais koche Diretora', '02046886046', '', 'Professor: Ana Cristina Possap Cesa', 'adult', 10],
    [18, 'Lais koche Diretora', '02046886046', '', 'Professor: Ana Cristina Possap Cesa', 'adult', 10],
    [19, 'Lais koche Diretora', '02046886046', '', 'Professor: Ana Cristina Possap Cesa', 'adult', 10],
    [20, 'Lais koche Diretora', '02046886046', '', 'Professor: Ana Cristina Possap Cesa', 'adult', 10],
    [21, 'Ricardo Pieruccini Massairo', '02644386047', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'adult', 9],
    [22, 'Marines Helena Einsfeld', '90508645034', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'adult', 9],
    [23, 'Jadir Einsfeld', '62259903053', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'adult', 9],
    [24, 'Murilo Henrique Einsfeld', '04598720018', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'kid', 9],
    [25, 'Marlei Bossle', '55142184068', '', 'Tecnico: Gastronomia - Maria Eduarda Gaiardo', 'adult', 12],
    [26, 'Samuel viecelli', '83993509072', '', 'Tecnico: Gastronomia - Valentina Viecelli Dornelles', 'adult', 13],
    [27, 'Max dornelles', '51206133091', '', 'Tecnico: Gastronomia - Valentina Viecelli Dornelles', 'adult', 13],
    [28, 'Irone covolan ', '21541434072', '', 'Tecnico: Gastronomia - Valentina Viecelli Dornelles', 'adult', 13],
    [29, 'Rafaela viecelli', '60994177050', '', 'Tecnico: Gastronomia - Valentina Viecelli Dornelles', 'adult', 13],
    [30, 'Eliseu Pereira da Silva ', '49040197091', '', 'Tecnico: ADM - Sarah Luiza Azevedo da Silva', 'adult', 14],
    [31, 'Maria Eduarda Marques ', '04122923000', '', 'Tecnico: ADM - Sarah Luiza Azevedo da Silva', 'adult', 14],
    [32, 'Roseli Elsa de Azevedo da Silva ', '64200906015', '', 'Tecnico: ADM - Sarah Luiza Azevedo da Silva', 'adult', 14],
    [38, 'fatima slongo', '40247988049', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 20],
    [39, 'rian de souza', '04005735045', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 20],
    [40, 'melissa padilha', '05687095004', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 20],
    [41, 'monica slongo', '96214260068', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 20],
    [42, 'William Paganella', '01557603006', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 21],
    [43, 'Melissa Fonseca ', '01563605007', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 21],
    [44, 'Ana Luiza Tadiotto ', '05818968073', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 22],
    [45, 'Iraja Fonseca ', '00328582050', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 22],
    [48, 'Rosangela Cabral de Jesus ', '92146988053', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 25],
    [49, 'Sidnei Antonio e Silva de Jesus ', '68030894015', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 25],
    [50, 'Gabriel Daros da Silva', '05454044016', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 26],
    [51, 'Maristela Daros', '49040278091', '', 'Tecnico: Gastronomia - Vitoria Luiza Cabral de Jesus', 'adult', 26],
    [52, 'Kellen Corso ', '00687814073', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 27],
    [66, 'Everton Padilha', '81517831091', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 31],
    [67, 'Grasiele de Mello', '00708581013', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'adult', 31],
    [68, 'Pedro de Mello', '00708581013', '', 'Tecnico: Gastronomia - Isabeli Slongo Padilha', 'kid', 31],
    [71, 'Jairo Jose Stachowski', '01537398008', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 35],
    [73, 'Percio Rodrigues', '91844274004', '', 'Tecnico: Gastronomia - Gabrielli Selistre', 'adult', 38],
    [77, 'EVANDRO CORSO', '70452750059', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 42],
    [78, 'MARELAINE F BERTON CORSO', '91919193049', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 42],
    [79, 'Maria Clair dos Santos ', '81458460053', '', 'Tecnico: Gastronomia - Gabrielli Selistre', 'adult', 43],
    [80, 'Ketlen Corso', '03605563023', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 44],
    [81, 'Jhonatan Rodrigues', '04958025065', '', 'Tecnico: Gastronomia - Gabrielli Selistre', 'adult', 45],
    [84, 'Fabio Antonio Pizzoli', '61822574072', '', 'Tecnico: Gastronomia - Fernando Fagherazzi Pizzoli', 'adult', 47],
    [86, 'Caio Brandalise ', '03481334052', '', 'Tecnico: Gastronomia - Julia Cristina Galvo Ribas', 'adult', 49],
    [87, 'Maria de Fatima F Pizzoli', '44573804072', '', 'Tecnico: Gastronomia - Fernando Fagherazzi Pizzoli', 'adult', 50],
    [88, 'Heloisa Gregoletto Duso', '61799688020', 'Celiaca ', 'Tecnico: ADM - Paola Gregoletto Duso', 'adult', 51],
    [89, 'Ricardo Alexandre Duso ', '49495089034', '', 'Tecnico: ADM - Paola Gregoletto Duso', 'adult', 51],
    [90, 'Pietro Gregoletto Duso ', '04432038063', '', 'Tecnico: ADM - Paola Gregoletto Duso', 'adult', 51],
    [92, 'Vinicius longo Rodrigues ', '02763550088', '', 'Tecnico: ADM - Ana Vitoria Rodrigues', 'adult', 53],
    [93, 'Ana Lucia Longo ', '42117976034', '', 'Tecnico: ADM - Ana Vitoria Rodrigues', 'adult', 53],
    [94, 'Rejane Ribas', '37673211068', '', 'Tecnico: Gastronomia - Julia Cristina Galvo Ribas', 'adult', 54],
    [98, 'Claudio Forini', '64105342053', '', 'Tecnico: ADM - Bernardo Camargo Forini', 'adult', 58],
    [99, 'Adriana Camargo Forini ', '91140005049', '', 'Tecnico: ADM - Bernardo Camargo Forini', 'adult', 58],
    [100, 'Maria das Gracas Galvo ', '46260714904', '', 'Tecnico: Gastronomia - Julia Cristina Galvo Ribas', 'adult', 59],
    [102, 'Monica Ribas', '83504249900', '', 'Tecnico: Gastronomia - Julia Cristina Galvo Ribas', 'adult', 61],
    [103, 'Maria Elisa Basso Dal Bo', '02647205043', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 62],
    [104, 'Ortencila Basso Dal Bo', '62439260010', '', 'Tecnico: Gastronomia - Isadora Berton Corso', 'adult', 62],
    [105, 'Renato Ribas ', '37670077034', '', 'Tecnico: Gastronomia - Julia Cristina Galvo Ribas', 'adult', 63],
    [106, 'Everton Massairo', '48584312072', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'adult', 67],
    [107, 'Suelen Conceicao da Roza', '01445460009', '', 'Tecnico: Gastronomia - Ana Paula Einsfeld', 'adult', 67],
    [109, 'Carla Pessoa Cavalcante da Costa ', '02556563788', '', 'Tecnico: ADM - Manuella Pessoa Cavalcante da Costa', 'adult', 68],
    [110, 'Rafaela Viezzer ', '03538821003', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 69],
    [111, 'Ney Viezzer ', '34376380091', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 69],
    [112, 'Lucca De Zorzi ', '60288100026', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 69],
    [113, 'Any Finger ', '49445715004', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 69],
    [114, 'Gabriel Rosa ', '02095139003', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 69],
    [118, 'IVANI DANIELESKI', '61502227053', '', 'Tecnico: ADM - Augusto Danieleski Tomanchievicz', 'adult', 71],
    [119, 'RUDINEI TOMANCHIEVICZ', '43299210068', '', 'Tecnico: ADM - Augusto Danieleski Tomanchievicz', 'adult', 71],
    [120, 'Nadia Ravanello Pasa', '51020998091', '', 'Tecnico: ADM - Pedro Augusto Pasa Sartori', 'adult', 72],
    [121, 'Paulo Sartori', '68810776020', '', 'Tecnico: ADM - Pedro Augusto Pasa Sartori', 'adult', 72],
    [122, 'Patricia Barboza Cardoso ', '00962509094', 'Alergia a Canela', 'Professor: Patricia Barboza Cardoso ', 'adult', 74],
    [123, 'Fernanda Maria Francischini Schmitz', '52446930000', '', 'Professor: Patricia Barboza Cardoso ', 'adult', 74],
    [124, 'Bruna Chiaradia ', '00616772050', '', 'Professor: Bruna Chiaradia', 'adult', 75],
    [125, 'Everton Luis Weber', '00616772050', '', 'Professor: Bruna Chiaradia', 'adult', 75],
    [129, 'Rachel Vanin De Zorzi', '88525481068', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 78],
    [130, 'Leonardo De Zorzi', '88525481068', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 78],
    [131, 'Victoria Vanin De Zorzi', '88525481068', '', 'Tecnico: Gastronomia - Marcella Finger Viezzer', 'adult', 78],
    [132, 'Augusto Branchi Graebin', '02039442081', '', 'Tecnico: ADM - Maria Eduarda Dannenhauer Uhl', 'adult', 79],
    [137, 'Denise Machado dos Santos', '02722719002', '', 'Tecnico: ADM - Leticia Machado Gil', 'adult', 84],
    [138, 'Fatima do Amaral Machado ', '57536015020', '', 'Tecnico: ADM - Leticia Machado Gil', 'adult', 84],
    [139, 'Antonio Nereu Gil', '48261343049', '', 'Tecnico: ADM - Leticia Machado Gil', 'adult', 84],
    [140, 'Adriano Ferrigo', '70000581020', '', 'Tecnico: Gastronomia - Pedro Schio Ferrigo', 'adult', 86],
    [141, 'Luci Schio ', '55895565034', '', 'Tecnico: Gastronomia - Pedro Schio Ferrigo', 'adult', 86],
    [142, 'Luana Schio Ferrigo ', '02945160006', '', 'Tecnico: Gastronomia - Pedro Schio Ferrigo', 'adult', 86],
    [145, 'Mauricio Machado Marca', '01495454903', '', 'Tecnico: ADM - Fernanda Marca', 'adult', 88],
    [146, 'Maria Vitoria Marca', '02173305093', '', 'Tecnico: ADM - Fernanda Marca', 'adult', 88],
]
print('COMPRADORES:')
for c in compradores:
    print(c)
print('\nINGRESSOS:')
for i in ingressos:
    print(i)

# compradores = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Compradores;"""}).json()['json']
# compradores_ordem = sorted(compradores, key=lambda x: x[0])
# ingressos = requests.get('https://trattoria-three.vercel.app/get', json={'sql':"""select * from Ingressos;"""}).json()['json']
# ingressos_ordem = sorted(compradores, key=lambda x: x[0])
# print('COMPRADORES:')
# for info in compradores_ordem:
#     print(info)
# print('\nINGRESSOS:')
# for info in ingressos_ordem:
#     print(info)