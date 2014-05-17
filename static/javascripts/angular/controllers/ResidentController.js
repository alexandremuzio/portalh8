var app = angular.module('PortalH8', []);


function ResidentController($scope, $filter, $timeout) {
    //initializing scope varibales
    $scope.sortingOrder = 'name';
    $scope.reverse = false;
    $scope.filteredItems = [];
    $scope.itemsPerPage = 5;
    $scope.test = 'muzio';
    //classical way of finding a substring (needle) in a given string (haystack)
    var searchMatch = function (haystack, needle) {
        if (!needle || !haystack) {
            return false;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // filter the items following the search string
    $scope.search = function () {
        if($scope.query.length > 2){
            $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                for(var attr in item) {
                    if(item.hasOwnProperty(attr))
                        if (searchMatch(item[attr], $scope.query))
                            return true;
                }
                return false;
            });
            if ($scope.sortingOrder !== '') {
                $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sortingOrder, $scope.reverse);

                matches = [];
                for(i=0; i<$scope.filteredItems.length; i++)
                    matches.push($scope.filteredItems[i].apt + $scope.filteredItems[i].spot);
                unhighlight();
                highlight(matches);
            }
        } else{
            $scope.filteredItems = [];
            unhighlight();
        }
    };


    $scope.items = [
    {"quarter":  "H", "apt":  "APTO", "spot":  "Vaga", "name":  "NOME", "nickname":  "Apelido", "course":  "Curso", "grad_year":  "TURMA", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "101", "spot":  "A", "name":  "Dafne de Brito Cruz", "nickname":  "Dafne", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "101", "spot":  "A", "name":  "Dafne de Brito Cruz", "nickname":  "Dafne", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "D", "name":  "Israel Sena Simil", "nickname":  "Assuncao", "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "101", "spot":  "D", "name":  "Sarah Villanova Borges", "nickname":  "Monosara", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "101", "spot":  "E", "name":  "Adriana Nunes Chaves Lima", "nickname":  "Adriana", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "101", "spot":  "F", "name":  "Jessica Gomes De Souza Alcantara Meireles", "nickname":  "Olivia", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "102", "spot":  "A", "name":  "Natalia Simoes Evangelista                ", "nickname":  "Natalia", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "102", "spot":  "C", "name":  "Nathana Alcantara Lima", "nickname":  "Nathana", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "102", "spot":  "E", "name":  "Joyce Carolynne De Melo Silvestre", "nickname":  "Joy", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "A", "name":  "Thais Kagohara", "nickname":  "Cho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "B", "name":  "Camilla Matias Morais", "nickname":  "Camilla", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "C", "name":  "Rayssa Freitas Carvalho", "nickname":  "Rayssa", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "D", "name":  "Bruna Halila Morrone", "nickname":  "12 Anos", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "E", "name":  "Valeria Gomes de Souza", "nickname":  "Valeria", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "103", "spot":  "F", "name":  "Raffaela Fuhr Vilas Boas", "nickname":  "Mercenaria", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "104", "spot":  "B", "name":  "Isabella Amorim Goncalez", "nickname":  "Isabella", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "104", "spot":  "C", "name":  "Bianca Macedo", "nickname":  "Bianca", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "104", "spot":  "D", "name":  "Mariana Caldas Correia Borges", "nickname":  "Mariana", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "104", "spot":  "E", "name":  "Maysa Laurindo Javoski Gomes", "nickname":  "Fiona", "course":  "ELE", "grad_year":  "T.11'''", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "104", "spot":  "F", "name":  "Gabriela Nobre Pedreira Da Costa", "nickname":  "Gabriela", "course":  "CIV", "grad_year":  "T.11''", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "105", "spot":  "A", "name":  "Lelia Lundi Andrade Loures", "nickname":  "Amelia", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "105", "spot":  "B", "name":  "Ana Luiza Ferron Zanella", "nickname":  "Bozena", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "105", "spot":  "C", "name":  "Nathianne De Moura De Andrade", "nickname":  "Pea", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "105", "spot":  "D", "name":  "Juliana Lemes Arai", "nickname":  "Gaussiana", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "105", "spot":  "F", "name":  "Thayza Tabisz                             ", "nickname":  "Thayza", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "106", "spot":  "A", "name":  "Juliana Modesto Guimaraes Rocha Tristao", "nickname":  "Ju Tristao", "course":  "ELE", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "106", "spot":  "C", "name":  "Rafaela Lopes Melo", "nickname":  "Rafaela", "course":  "ELE", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "106", "spot":  "E", "name":  "Ruth Santos Santana                       ", "nickname":  "Ruth", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "106", "spot":  "F", "name":  "Talita Alessandra Da Silva", "nickname":  "TalITA", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "107", "spot":  "B", "name":  "Diana Paula Amaral Navas", "nickname":  "Diana", "course":  "MEC", "grad_year":  "T.12", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "107", "spot":  "C", "name":  "Bruna Amorim De Barros Lima", "nickname":  "Bruninha", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "107", "spot":  "D", "name":  "Hadassa Pereira De Carvalho", "nickname":  "Hadassa", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "107", "spot":  "E", "name":  "Juliana Figueiredo Nepomuceno", "nickname":  "Ju Nepomuceno", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "107", "spot":  "F", "name":  "Priscilla Yugue", "nickname":  "Priscilla", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "A", "name":  "Thais Campos De Almeida", "nickname":  "Pantufa", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "B", "name":  "Luisa Amaral De Almeida", "nickname":  "Luisa", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "C", "name":  "Carolina Matsuse Dornellas Novais", "nickname":  "Carol", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "D", "name":  "Katherine Raissa Ferreira Martinez", "nickname":  "Bad Kath", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "E", "name":  "Isadora De Freitas Leite Kimura", "nickname":  "Isadora", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "108", "spot":  "F", "name":  "Ludmila Schincariol Pontremolez", "nickname":  "Lud", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "109", "spot":  "B", "name":  "Lara Jacobina Reis", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "109", "spot":  "D", "name":  "Camila Raffo Pereda", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "109", "spot":  "F", "name":  "Anna Sarah Vasconcelos Fava", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "A", "name":  "T\x88ssio Cortes Cavalcante", "nickname":  "Capixaba", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "B", "name":  "Rogerio Miguez Ribas Junior", "nickname":  "Roxerio", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "C", "name":  "Mark Cristhian Matern", "nickname":  "Mark", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "D", "name":  "Samuel Francisco De Oliveira Evangelista", "nickname":  "Glauco", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "E", "name":  "Mauricio Correia Sales", "nickname":  "Gaspar", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "110", "spot":  "F", "name":  "Philippe Molina Diener", "nickname":  "Ze da Meia", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "A", "name":  "Pedro Victor Barata De Barros Camarotti", "nickname":  "Fox", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "B", "name":  "Natan  Franco  da Silva", "nickname":  "Cabecinha", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "C", "name":  "Renan Sousa Mendes", "nickname":  "Claustro", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "D", "name":  "Pedro Pacheco Louzada", "nickname":  "Panqueca", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "E", "name":  "Ricardo Cavalcanti De Carvalho Sansolo", "nickname":  "Sansolo", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "111", "spot":  "F", "name":  "John Tchan Lee", "nickname":  "Chun Li", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "A", "name":  "Rafael Leonardo De Sena E Vasconcelos", "nickname":  "Gigante", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "B", "name":  "Diogo Nascimento De Lucena", "nickname":  "Snorlax", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "C", "name":  "Luciano Holanda Gomes", "nickname":  "Maestro", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "D", "name":  "Thiago Sales Rocha", "nickname":  "Passivo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "E", "name":  "Tiago Pazos Moura", "nickname":  "Flautista", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "112", "spot":  "F", "name":  "Fernando Augusto Avelino Frank Machado", "nickname":  "Saquarema", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "A", "name":  "Gustavo Cellet Marques", "nickname":  "Povo", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "B", "name":  "Lucas De Brito Rocha", "nickname":  "Britney", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "C", "name":  "Saulo Moraes De Faria", "nickname":  "Zinho", "course":  "1PROF", "grad_year":  "T.14'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "D", "name":  "Rubens Farias De Albuquerque Neto", "nickname":  "Onze", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "E", "name":  "Joao Paulo De Andrade Dantas", "nickname":  "Barbie", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "113", "spot":  "F", "name":  "Gustavo Cunha de Oliveira", "nickname":  "Pooh", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "114", "spot":  "B", "name":  "Andrei Luswarghi Souza Costa", "nickname":  "Laranja", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "114", "spot":  "C", "name":  "Guilherme Ferreira Lima Fernandez", "nickname":  "Finlandes", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "114", "spot":  "E", "name":  "Iuri Alexandre Cernov Oliveira Barbosa", "nickname":  "Presidente", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "A", "name":  "Vicente Ferrer Correia Lima Neto", "nickname":  "51", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "B", "name":  "Rodolfo Barbosa Santos", "nickname":  "Topo Gigio", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "C", "name":  "Matheus Araujo Ribeiro", "nickname":  "Rosinha", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "D", "name":  "Matheus Pinheiro Cavalcanti Albuquerque", "nickname":  "House", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "E", "name":  "Henrique Bessa De Farias", "nickname":  "Baby", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "115", "spot":  "F", "name":  "Bernardo Vianna de Melo Jacintho", "nickname":  "Ja Sinto", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "A", "name":  "Kevin Nakahara", "nickname":  "Kevin", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "B", "name":  "Denis Costa Herrmann", "nickname":  "Penis", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "C", "name":  "Joao Mario De Medeiros Paixao", "nickname":  "Baladeiro", "course":  "1PROF", "grad_year":  "T.14'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "D", "name":  "Allison Fauat Schraier", "nickname":  "Jiraya", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "E", "name":  "Luciano Leal De Sousa", "nickname":  "Negresco", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "116", "spot":  "F", "name":  "Rodolfo Akira Wassano", "nickname":  "Buda", "course":  "1PROF", "grad_year":  "T.14'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "117", "spot":  "A", "name":  "Luiz Eduardo Dias Bezerra Filho", "nickname":  "Fusao", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "117", "spot":  "B", "name":  "Igor Luiz De Moura Rios", "nickname":  "Igor", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "117", "spot":  "C", "name":  "William De Abreu Pinho", "nickname":  "Magico", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "117", "spot":  "D", "name":  "Tarcisio Augusto De Bonfim Gripp", "nickname":  "Tarcisio", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "117", "spot":  "F", "name":  "Bruno Ferri de Moraes", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "118", "spot":  "A", "name":  "Andre Luiz Costa Pereira Filho", "nickname":  "Andre", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "118", "spot":  "C", "name":  "Marcelo De Castro Rodrigues E Almeida", "nickname":  "Sonambulo", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "118", "spot":  "D", "name":  "Pedro Henrique Araujo Nunes", "nickname":  "Piu-Piu", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "118", "spot":  "E", "name":  "David Issa Mattos", "nickname":  "Davi", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "118", "spot":  "F", "name":  "Ian Lima Barreto", "nickname":  "Sem Querer", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "119", "spot":  "B", "name":  "Bruno Silva Mucciaccia", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "119", "spot":  "C", "name":  "Joao Lucas De Lima Pinheiro", "nickname":  "Chaveiro", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "119", "spot":  "D", "name":  "Felipe Navarro Balbino Alves", "nickname":  "Roraima", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "119", "spot":  "E", "name":  "Roberto Brusnicki", "nickname":  "Brusnicki", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "119", "spot":  "F", "name":  "Joao Vitor de Almeida Goncalves", "nickname":  "Aeroporto", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "120", "spot":  "B", "name":  "Regis Prado Barbosa", "nickname":  "Corujunior", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "120", "spot":  "C", "name":  "Pedro Cavaglieri", "nickname":  "Frodo", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "120", "spot":  "D", "name":  "Rafael Endlich Pimentel", "nickname":  "Maminha", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "120", "spot":  "E", "name":  "Abraao Barros Lacerda", "nickname":  "Abraao", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "120", "spot":  "F", "name":  "Ulisses Pereira Sampaio", "nickname":  "Ulisses", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "A", "name":  "Samuel Cerqueira Pinto", "nickname":  "Olinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "B", "name":  "Sergio Salzedas Vilela", "nickname":  "Traidor", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "C", "name":  "Talles De Oliveira Faria", "nickname":  "Talles", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "D", "name":  "Francisco Pedrosa Reis", "nickname":  "Cap. Labareda", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "E", "name":  "Mauro Brito Junior", "nickname":  "Dengoso", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "121", "spot":  "F", "name":  "Victor Juca Martins", "nickname":  "Cebolinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "122", "spot":  "B", "name":  "Rafael Rabelo De Carvalho", "nickname":  "Gremlin", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "122", "spot":  "C", "name":  "Bruno Lima Silva", "nickname":  "Dalai Lama", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "122", "spot":  "D", "name":  "Joao Paulo De Podesta Uchoa De Aquino", "nickname":  "Bostejo", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "122", "spot":  "E", "name":  "Antonio Cesar Pinto Da Cunha", "nickname":  "Rocky", "course":  "CIV", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "122", "spot":  "F", "name":  "Orlando Alencar Lustosa Neto", "nickname":  "Piripiri", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "A", "name":  "Joao Pedro Cavalcanti Pereira", "nickname":  "Camelo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "B", "name":  "Reilton Bernardes Dos Santos Coutinho", "nickname":  "Mr. Freeze", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "C", "name":  "Jose De Oliveira Lima Neto", "nickname":  "Mr. Bean", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "D", "name":  "Hector Selvatice Fardin", "nickname":  "HIV", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "E", "name":  "Davi Sampaio De Alencar", "nickname":  "Trozoba", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "123", "spot":  "F", "name":  "Paulo Andre Herculano De Lima", "nickname":  "My Cojones", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "A", "name":  "Arioberto Luciano Da Silva Junior", "nickname":  "Ganso", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "B", "name":  "Felipe Alexandre Lima De Abreu", "nickname":  "Poker Face", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "C", "name":  "Paulo Gabriel Ramos Monteiro", "nickname":  "Ae", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "D", "name":  "Henrique Lima Neto Lacerda", "nickname":  "Mancuzinho", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "E", "name":  "Joao Jardim Neto", "nickname":  "Lourdes", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "124", "spot":  "F", "name":  "Eduardo Carvalho Pinto", "nickname":  "45", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "A", "name":  "Joao Victor Souza Mendes", "nickname":  "Rato", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "B", "name":  "Jose Ailton Azevedo Araujo Filho", "nickname":  "Jusy", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "C", "name":  "Igor Cardoso Amatte", "nickname":  "Mineirinho", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "D", "name":  "Marcos Vinicio Da Silva Soares", "nickname":  "Cascao", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "E", "name":  "Bruno Vianna De Ferreira Bandeira", "nickname":  "Agachamento", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "125", "spot":  "F", "name":  "Ricardo Alencar Alves", "nickname":  "Capitao Tucano", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "A", "name":  "Rafael Takeshi Sasaki Okida", "nickname":  "Santo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "B", "name":  "Guilherme Arantes De Achilles Mello", "nickname":  "Americans", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "C", "name":  "Felipe De Souza Borges", "nickname":  "Fudido", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "D", "name":  "Igor Franzoni Okuyama", "nickname":  "Franzino", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "E", "name":  "Danullo Carvalho Martins", "nickname":  "Knorr", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "126", "spot":  "F", "name":  "Cicero Jezualdo Macedo Da Cruz", "nickname":  "Chimbinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "127", "spot":  "B", "name":  "Andre Gomes Simao", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "127", "spot":  "C", "name":  "Samuel Wolf Pietnozka", "nickname":  "Wolf", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "127", "spot":  "D", "name":  "Danullo Augusto Dos Santos Rocha De Faria", "nickname":  "Armandinho", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "127", "spot":  "E", "name":  "Flavio Rodrigues De Almeida", "nickname":  "Morre Diabo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "127", "spot":  "F", "name":  "Bruno de Alencar Bragato", "nickname":  "Bragato", "course":  "1FUND", "grad_year":  "T.16'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "A", "name":  "Emanuel Felipy Melo Araujo", "nickname":  "Das Neves", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "B", "name":  "Milton Eiji Takamura", "nickname":  "Mary Jane", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "C", "name":  "Braulio Henrique Orion Uchoa Veloso Pinto", "nickname":  "Braulio", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "D", "name":  "Matthaeus Muniz Deusdara Ferreira Lopes", "nickname":  "Garrancho", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "E", "name":  "Victor So Taa Rhan", "nickname":  "Xing", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "128", "spot":  "F", "name":  "Homero Barrocas Soares Esmeraldo", "nickname":  "Charada", "course":  "COMP", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "129", "spot":  "B", "name":  "Iury Pinheiro Freire Ximenes", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "129", "spot":  "C", "name":  "Henrique Rocha Macambira Albuquerque", "nickname":  "Macambira", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "129", "spot":  "D", "name":  "Artur Pimentel De Oliveira", "nickname":  "Avatar", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "129", "spot":  "E", "name":  "Bruno Lucatto", "nickname":  "Analfabeto", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "129", "spot":  "F", "name":  "Matteus Bueno Caprecci", "nickname":  "Mari", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "A", "name":  "Daniel Saraiva Sampaio", "nickname":  "Tripa", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "B", "name":  "Jose Leonidas De Menezes Cristino Filho", "nickname":  "Bolon", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "C", "name":  "Gabriel Marinho De Farias", "nickname":  "Boy", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "D", "name":  "Herton Ferreira Cabral Junior", "nickname":  "Herton", "course":  "CIV", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "E", "name":  "Elias Leal Lima", "nickname":  "Elias Maluco", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "130", "spot":  "F", "name":  "Israel Sales Ramos", "nickname":  "Clo", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "A", "name":  "Felipe Moreira Ribeiro", "nickname":  "Dobradinha", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "B", "name":  "Thiago Fernando Cardoso Da Silva", "nickname":  "Brioche", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "C", "name":  "Augusto Rodrigues Pereira", "nickname":  "Petrolina", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "D", "name":  "Luis Filipe Batista Cordeiro Araujo", "nickname":  "Auto-Retrato", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "E", "name":  "Rodrigo Amorim Ruiz", "nickname":  "Princesa", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "131", "spot":  "F", "name":  "Felipe Ferreira Villar Coelho", "nickname":  "Nicolau", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "132", "spot":  "A", "name":  "Pedro Correia Tredezini", "nickname":  "Timtim", "course":  "CIV", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "132", "spot":  "B", "name":  "Julio Alves Ribeiro Neto", "nickname":  "Bobo", "course":  "CIV", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "132", "spot":  "C", "name":  "Pedro Luiz Teruel Filho", "nickname":  "Vereador", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "132", "spot":  "D", "name":  "Pedro Filipe Barrionuevo De Almeida", "nickname":  "Eleitor", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "133", "spot":  "A", "name":  "Luiz Eduardo Schiller", "nickname":  "Schillinho", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "133", "spot":  "B", "name":  "Gabriel Lucas Gil Secco", "nickname":  "Agroboy", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "133", "spot":  "C", "name":  "Edmir Jos_ Dos Santos J\xECnior", "nickname":  "Edmir", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "133", "spot":  "D", "name":  "Juliano de Souza Campos", "nickname":  "Juliano", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "134", "spot":  "A", "name":  "Ramon Nunes De Oliveira", "nickname":  "Nemo", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "134", "spot":  "B", "name":  "Luis Carlos De Oliveira Brochado", "nickname":  "Xerife", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "134", "spot":  "C", "name":  "Antonio Deromir Neves Da Silva Junior", "nickname":  "Antonio", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "134", "spot":  "D", "name":  "Heitor Albuquerque Vieira", "nickname":  "Heitor", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "135", "spot":  "A", "name":  "Daniel Vieira De Melo Carlini", "nickname":  "Gordinho", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "135", "spot":  "B", "name":  "Tulio Crepaldi Rosa Fernandes", "nickname":  "Tulio", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "135", "spot":  "C", "name":  "Pedro Wanderley Furquim Werneck", "nickname":  "Werneck", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "135", "spot":  "D", "name":  "Paulo Henrique Valente Campos", "nickname":  "Mancu", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "136", "spot":  "A", "name":  "Marcelo Bastos Tokarnia De Oliveira", "nickname":  "3G", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "136", "spot":  "B", "name":  "Pedro Henrique Sionek", "nickname":  "Sionek", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "136", "spot":  "C", "name":  "Francisco Osman Pontes Neto", "nickname":  "Rosado", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "136", "spot":  "D", "name":  "Adailton Lopes dos Santos Filho", "nickname":  "Adailton", "course":  "AER", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "137", "spot":  "A", "name":  "Carlos Alberto Lima Ara\xECjo J\xECnior", "nickname":  "Caju", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "137", "spot":  "B", "name":  "Luke Antunes Do Vale", "nickname":  "Luke", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "137", "spot":  "C", "name":  "Yuri Oliveira Silva", "nickname":  "Yuri", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "137", "spot":  "D", "name":  "Filipe Simoes Melo", "nickname":  "Zureia", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "138", "spot":  "A", "name":  "Antonio Lamounier Soares Lira Da Silva", "nickname":  "Lamounier", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "138", "spot":  "B", "name":  "Rafael Da Silva Alves", "nickname":  "Manteiga", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "138", "spot":  "C", "name":  "Ricardo Gabrel Pontes Lins", "nickname":  "Lins", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "138", "spot":  "D", "name":  "Diego Alexsander Mamede", "nickname":  "Mamede", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "139", "spot":  "A", "name":  "Mateus Lucas De Noronha", "nickname":  "Gracie", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "139", "spot":  "B", "name":  "Fernando Nunes Frota", "nickname":  "Cagao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "139", "spot":  "C", "name":  "Rafael Barreira Botelho Barroso", "nickname":  "Praieiro", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "139", "spot":  "D", "name":  "Vitor Herbert Silvestre Coelho Carvalho", "nickname":  "Sobral", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "140", "spot":  "A", "name":  "Daniel Nascimento", "nickname":  "Bola", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "140", "spot":  "B", "name":  "Nelson Correia da Costa Junior", "nickname":  "Nelson", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "140", "spot":  "C", "name":  "Andre Camargo De Carvalho", "nickname":  "Curioso", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "140", "spot":  "D", "name":  "Hygor Lenon Burza Gomes Dupin", "nickname":  "Hygor", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "141", "spot":  "A", "name":  "Joaquim Felipe Teles Quindere Ribeiro", "nickname":  "Superman", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "141", "spot":  "B", "name":  "Andre Antonio Battagello", "nickname":  "Bata", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "141", "spot":  "C", "name":  "Michell Fontes Souza", "nickname":  "Che", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "141", "spot":  "D", "name":  "Matheus Alcantara Meira", "nickname":  "Grosseirao", "course":  "MEC", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "142", "spot":  "A", "name":  "Bruno Bezerra Bluhm", "nickname":  "Crato", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "142", "spot":  "B", "name":  "Jose Renato Paiva Carvalho", "nickname":  "Ze", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "142", "spot":  "C", "name":  "Rafael Rebou\x8Das Peixoto", "nickname":  "Baiano", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 A", "apt":  "142", "spot":  "D", "name":  "Felipe de Andrade  Aguiar", "nickname":  "Farenheit", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "201", "spot":  "B", "name":  "Fernando Issa Franco", "nickname":  "Fernando", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "201", "spot":  "C", "name":  "Victor Ribeiro Moura", "nickname":  "Dhalsim", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "201", "spot":  "D", "name":  "Felipe Vieira Frujeri", "nickname":  "Doutor", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "201", "spot":  "E", "name":  "Lucas Nyari", "nickname":  "Nyari", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "201", "spot":  "F", "name":  "Gustavo Alves Bruno Kanaan", "nickname":  "Claudia", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "A", "name":  "Marcio Araujo De Paiva Filho", "nickname":  "Moco", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "B", "name":  "Paulo Cesar Neves Da Costa", "nickname":  "Paulo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "C", "name":  "Mauricio Issao Rodrigues Matsoui", "nickname":  "Caminhoneiro", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "D", "name":  "Henrique Katsuhiro Fugimoto", "nickname":  "Japa Loko", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "E", "name":  "Ricardo Furquim Pereira Neto Filho", "nickname":  "Piroco", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "202", "spot":  "F", "name":  "Henrique Bezerra Diogenes", "nickname":  "Fura-Olho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "A", "name":  "Felipe Mendes Dos Santos", "nickname":  "Pinguim", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "B", "name":  "Victor Goncalves Elias", "nickname":  "Lag", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "C", "name":  "Bruno Henrique Machado de Freitas", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "E", "name":  "Eric Gomes Muxagata Conrado", "nickname":  "Muxagata", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "203", "spot":  "F", "name":  "Breno Vieira da Silva Passos", "nickname":  "Fake Doi", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "A", "name":  "Eduardo Lopes Pinho", "nickname":  "Red Bull", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "B", "name":  "Leonardo Martire Umburana De Araujo", "nickname":  "Vibrao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "C", "name":  "Bernardo Moscardini Fabiani", "nickname":  "Amsterdam", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "D", "name":  "Ronaldo Chaves Reis", "nickname":  "Green Label", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "E", "name":  "Matheus Barros De Paula", "nickname":  "Madjomba", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "204", "spot":  "F", "name":  "Samuel Moreira Timbo", "nickname":  "Timbo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "205", "spot":  "A", "name":  "Eduardo Alves Carvalho Rodrigues", "nickname":  "Pinta", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "205", "spot":  "B", "name":  "Guilherme Hoffmann Da Silva", "nickname":  "Hoffmann", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "205", "spot":  "C", "name":  "Michel Augusto Ovando de  Araujo Portas", "nickname":  "Michel", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "205", "spot":  "E", "name":  "Fabio Martins Fernandes", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "206", "spot":  "A", "name":  "Rodrigo Roim Ferreira", "nickname":  "Ruim", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "206", "spot":  "B", "name":  "Guilherme Venturelli Cavalheiro", "nickname":  "Jesus", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "206", "spot":  "C", "name":  "Felipe Vincent Yannik Romero Pereira", "nickname":  "Croata", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "206", "spot":  "D", "name":  "Davi de Castro Silva", "nickname":  "Psycho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "206", "spot":  "E", "name":  "Daniel Caueh Dunaiski Figueira Leal", "nickname":  "Restart", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "A", "name":  "Marcelo Silveira Pereira", "nickname":  "Mu\x8Dao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "B", "name":  "Paulo Matheus Borges Esteves", "nickname":  "Arroz", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "C", "name":  "Bruno Correia Almeida", "nickname":  "Estimamento", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "D", "name":  "Bruno De Nadai Sarnaglia", "nickname":  "Gago", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "E", "name":  "Leandro De Oliveira Noel Ribeiro", "nickname":  "Superman", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "207", "spot":  "F", "name":  "Rafael Rodrigues Varella", "nickname":  "Inferninho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "208", "spot":  "A", "name":  "Joao Paulo Amorim Torres", "nickname":  "Urso", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "208", "spot":  "C", "name":  "Talles Henrique De Medeiros Dantas", "nickname":  "Vinagrete", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "208", "spot":  "D", "name":  "Vandilson Ivo Junqueira Filho", "nickname":  "Furioso", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "208", "spot":  "E", "name":  "Marcelo Florencio Sobral", "nickname":  "Enxaqueca", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "208", "spot":  "F", "name":  "Victor Jose Tiburtius Franco", "nickname":  "Oi", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "A", "name":  "Dante Ricardo Ambrosio", "nickname":  "Dante", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "B", "name":  "Diego Serra Azul Albuquerque", "nickname":  "Serra Azul", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "C", "name":  "Carlos Monteiro Barbosa Filho", "nickname":  "Topeira", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "D", "name":  "Guilherme Victal Alves Da Costa", "nickname":  "Azeite", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "E", "name":  "Bruno Oliveira Alves Ferreira", "nickname":  "Bruno", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "209", "spot":  "F", "name":  "Luiz Gustavo Muniz Nascimento", "nickname":  "Peq", "course":  "AESP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "A", "name":  "Lucas De Andrade Montez", "nickname":  "Mongo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "B", "name":  "Felipe De Araujo Pineschi Teixeira", "nickname":  "Turista", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "C", "name":  "Jose Agnelo Bezerra Guilherme Silva", "nickname":  "Agnelo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "D", "name":  "Carlos Henrique Severino", "nickname":  "Foguinho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "E", "name":  "Allan Lima Verde De Araujo Fernandes", "nickname":  "Azedo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "210", "spot":  "F", "name":  "Fernando Fonseca Andrade Oliveira", "nickname":  "Fonseca", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "A", "name":  "Ricardo Duarte Lima", "nickname":  "Wilson", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "B", "name":  "Jose Tupinamba Lopes Viana Junior", "nickname":  "Tupi", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "C", "name":  "Caio Richer Abreu Menezes", "nickname":  "Carteado", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "D", "name":  "Matheus Gabriel Carneiro De Aquino", "nickname":  "Rei do Crime", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "E", "name":  "Matheus Henrique Alves Moura", "nickname":  "Mohammed", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "211", "spot":  "F", "name":  "Luiz Castelo Branco Cavalcante", "nickname":  "Teresa", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "A", "name":  "Artur Austregesilo Scussel", "nickname":  "Barrichello", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "B", "name":  "Andre Saraiva Nobre Dos Santos", "nickname":  "Saraiva", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "C", "name":  "Renato Braga De Oliveira", "nickname":  "Vice", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "D", "name":  "Fathi-Alexandre De Souza Abid", "nickname":  "Fathi", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "E", "name":  "Alberto Huet Morais De Arruda Filho", "nickname":  "Albertinho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "212", "spot":  "F", "name":  "Igor Soares De Oliveira", "nickname":  "Cunhado", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "213", "spot":  "A", "name":  "Gabriel Leite De Carvalho", "nickname":  "Capeta", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "213", "spot":  "B", "name":  "Gabriel Cavalcante Marinho Lopes", "nickname":  "Ola", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "213", "spot":  "D", "name":  "Rodrigo Raimundo Freitas Santos", "nickname":  "MIB", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 B", "apt":  "213", "spot":  "E", "name":  "Luis Guilherme Bastos De Castro", "nickname":  "Chitao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "301", "spot":  "A", "name":  "VAGO", "nickname":  null, "course":  null, "grad_year":  null, "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "301", "spot":  "C", "name":  "Bruno Meireles Guitarrari", "nickname":  "Guitarhero", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "301", "spot":  "D", "name":  "Fernando Freire de Medeiros", "nickname":  "Fernandao", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "301", "spot":  "E", "name":  "Bernardo Sandino Azevedo de Amorim", "nickname":  "Pedigree", "course":  "ELE", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "301", "spot":  "F", "name":  "Adrian Shiokawa Alvarez", "nickname":  "Chantily", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "302", "spot":  "B", "name":  "Victor Vilas Pascoal", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "302", "spot":  "D", "name":  "Luiz Felipeh Aguiar de Lima Alves", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "302", "spot":  "F", "name":  "Felipe Sampaio Lima", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "303", "spot":  "B", "name":  "Eduardo Diedrich Mocellin", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "303", "spot":  "D", "name":  "Lucas Muller Machado de Oliveira", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "303", "spot":  "F", "name":  "Fernando Lima Saraiva Filho", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "304", "spot":  "A", "name":  "Glauber De Lima Guarinello", "nickname":  "Glauber", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "304", "spot":  "B", "name":  "Ivan Lopes Da Rocha", "nickname":  "Ozires", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "304", "spot":  "C", "name":  "Iago Belarmino Lucena", "nickname":  "Sanfoneiro", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "304", "spot":  "D", "name":  "Jose Mauricio Da Cunha Neto", "nickname":  "Mancebo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "304", "spot":  "F", "name":  "Daniel Roediger                           ", "nickname":  "Salva-vidas", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "A", "name":  "Renan Brito De Oliveira", "nickname":  "Away", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "B", "name":  "Leonardo Dos Anjos Cunha", "nickname":  "Nao Nao", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "C", "name":  "Rian Koja", "nickname":  "Rian", "course":  "AESP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "D", "name":  "Henrique Oliveira Da Mata", "nickname":  "Lobisomem", "course":  "AESP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "E", "name":  "Artur De Almeida Losnak", "nickname":  "Losnak", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "305", "spot":  "F", "name":  "Luiz Guilherme Carvalho Paiva", "nickname":  "LG", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "306", "spot":  "B", "name":  "Alexandre Ferreira Velho Muzio", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "306", "spot":  "D", "name":  "Leonam Jose Tavares de Oliveira", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "306", "spot":  "F", "name":  "Victor de Abreu Pinheiro Miranda", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "A", "name":  "Paulo Henrique Aguiar Araujo", "nickname":  "Doente", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "B", "name":  "Cesar Pereira De Freitas", "nickname":  "McLovin", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "C", "name":  "Bruno Borma Brugger", "nickname":  "Excelente", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "D", "name":  "Toni Burgatto", "nickname":  "Toni", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "E", "name":  "Natan Lima Viana", "nickname":  "Super Pig", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "307", "spot":  "F", "name":  "Paulo Tiago Carvalho Freitas", "nickname":  "Piti", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "A", "name":  "Fernando Ricardo Jaeger", "nickname":  "Jaeger", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "B", "name":  "Bruno Ferreira Rodrigues", "nickname":  "Kong", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "C", "name":  "Juliano Augusto de Bonfim Gripp", "nickname":  "Benegripe", "course":  "ELE", "grad_year":  "T.12", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "D", "name":  "Rodrigo Zauner", "nickname":  "Zauner", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "E", "name":  "Gabriel Luis Mello Dalalio", "nickname":  "Gabao", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "308", "spot":  "F", "name":  "Cristiano Charles Epifanio Martins", "nickname":  "Goiaba", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "309", "spot":  "B", "name":  "Rodolfo Rodrigues da Costa", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "309", "spot":  "D", "name":  "Davi Brasil de Albuquerque", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "309", "spot":  "F", "name":  "Henrique Goulart de Sousa Wu", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "310", "spot":  "A", "name":  "Tomas De Lima Ribeiro Almeida Freitas", "nickname":  "Toto", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "310", "spot":  "B", "name":  "Vinicius Vieira Alves", "nickname":  "Minguado", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "310", "spot":  "D", "name":  "Jonatas Rafael Rodrigues Hernandes        ", "nickname":  "Mancilinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "310", "spot":  "E", "name":  "Kayo De Franca Gurgel", "nickname":  "Kayo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "310", "spot":  "F", "name":  "Felipe Viana Sousa", "nickname":  "Flash", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "311", "spot":  "A", "name":  "Victor Alessandro Trindade Fonseca", "nickname":  "Goku", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "311", "spot":  "B", "name":  "Vitor Tessari Terra", "nickname":  "Pac-Man", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "311", "spot":  "C", "name":  "Arthur Nascimento Alves", "nickname":  "42", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "311", "spot":  "D", "name":  "Mario Castello Branco Gomes", "nickname":  "Bateria", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "311", "spot":  "E", "name":  "Claudionor Santos Junior", "nickname":  "Borges", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "312", "spot":  "A", "name":  "Dalton Felipe De Menezes", "nickname":  "Perseguido", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "312", "spot":  "B", "name":  "Marcio Valenca Ramos", "nickname":  "Cubo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "312", "spot":  "C", "name":  "Pedro Roberto Aranha Pinheiro", "nickname":  "Boks", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "312", "spot":  "D", "name":  "Renato Souza Sanabria", "nickname":  "Catita", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "312", "spot":  "E", "name":  "Luiz Filipe Martins Ramos", "nickname":  "Harry", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "312", "spot":  "F", "name":  "Igor Ken Tabuti", "nickname":  "Ken", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "313", "spot":  "B", "name":  "Guilherme Ferreira Lima", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "313", "spot":  "D", "name":  "Mattheus Martins Juca", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "313", "spot":  "F", "name":  "Victor Goncalves Condor dos Santos", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "A", "name":  "Fernando Eugenio De Oliveira Xavier", "nickname":  "Eugenio", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "B", "name":  "Paulo Marcelo Meneses Lira", "nickname":  "Playmobil", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "C", "name":  "Lucas Mestres Mendes", "nickname":  "Gordo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "D", "name":  "Pedro Gregory Cavalcante", "nickname":  "Casinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "E", "name":  "Tiago Guilhon Mitoso Rocha", "nickname":  "Guilhon", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "314", "spot":  "F", "name":  "Jardiel Freitas Cunha", "nickname":  "Pacoca", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "315", "spot":  "B", "name":  "Rafael Aoki Yamagata", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "315", "spot":  "D", "name":  "Rajan Ribeiro Tupinamba", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "315", "spot":  "F", "name":  "Rafael Carvalho de Oliveira", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "A", "name":  "Kelvyn Vayti Suzuki Rosinski", "nickname":  "Kelvyn", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "B", "name":  "Petronio Augusto Santos Nogueira", "nickname":  "Petronio", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "C", "name":  "Mateus Magalh\x86es Furlanetto", "nickname":  "Coringa", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "D", "name":  "Lucas Barreiros Robatto", "nickname":  "Cueca", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "E", "name":  "Andre Peregrino De Moura Cavalcante", "nickname":  "Freira", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "316", "spot":  "F", "name":  "Vinicius Bigogno Costa", "nickname":  "Vinicius", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "A", "name":  "Bruno Ferreira Dos Santos", "nickname":  "Casas Bahia", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "B", "name":  "Jose Eduino De Brito Cavalcanti Filho", "nickname":  "Bozo", "course":  "MEC", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "C", "name":  "Marcio Fernando da Justa Sena", "nickname":  "Manjao", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "D", "name":  "Yuri Fernando Barbosa Torres", "nickname":  "Plaquinha", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "E", "name":  "Pedro Ricardo Pereira Tavora", "nickname":  "PP", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "317", "spot":  "F", "name":  "Jose Ossimar Almeida Sousa Filho", "nickname":  "Ossimar", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "A", "name":  "Victor Araujo Abrantes de Andrade", "nickname":  "Vitinho", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "B", "name":  "Lucas Area Leao Barreto", "nickname":  "Area", "course":  "CIV", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "C", "name":  "Diego Ferreira Marcilio", "nickname":  "Ermit\x86o", "course":  "COMP", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "D", "name":  "Jobson Gilberto Barros Amorim", "nickname":  "Blow", "course":  "COMP", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "E", "name":  "Luis Gustavo Leandro De Paula", "nickname":  "Uberaba", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "318", "spot":  "F", "name":  "Matheus Fernandes Amorim", "nickname":  "Jimmy", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "319", "spot":  "B", "name":  "Matheus de Oliveira Leao", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "319", "spot":  "D", "name":  "Mateus Moller", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "319", "spot":  "E", "name":  "Iago Dalmaso Brasil Dias", "nickname":  "Iago", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "319", "spot":  "F", "name":  "Renan Pablo Rodrigues Da Cruz", "nickname":  "Bogao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "320", "spot":  "B", "name":  "Luiz Angel Rocha Rafael", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "320", "spot":  "D", "name":  "Ilo Pereira de Sa Emerenciano", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "320", "spot":  "F", "name":  "Leandro Tonderys Guidio", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "A", "name":  "Pedro Yuri Arbs Paiva", "nickname":  "Abraco", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "B", "name":  "Guilherme Costa Guimaraes Fernandes", "nickname":  "Feliz", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "C", "name":  "Luiz Pizano Fonseca", "nickname":  "Amnesia", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "D", "name":  "Diogo Godoi De Carvalho Ramos", "nickname":  "Diogo", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "E", "name":  "Lucas Moura Santana", "nickname":  "Papagaio", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "321", "spot":  "F", "name":  "Rodrigo Victor De Melo Marques", "nickname":  "Duas Bolas", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "A", "name":  "Samuel Carvalho Lima Holanda", "nickname":  "Patroa", "course":  "CIV", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "B", "name":  "Giovanne Joaquim Teles De Castro", "nickname":  "Guloso", "course":  "ELE", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "C", "name":  "Bruno De Souza Bonagura", "nickname":  "Sherlock", "course":  "COMP", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "D", "name":  "Thiago Freire Feijao Moreira", "nickname":  "Feijao", "course":  "MEC", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "E", "name":  "Caio Aiharu Oyama", "nickname":  "Malvado", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "322", "spot":  "F", "name":  "Rafael Machado Pereira", "nickname":  "Kamikaze", "course":  "COMP", "grad_year":  "T.12'", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "323", "spot":  "B", "name":  "Marcel Soares Ribeiro", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "323", "spot":  "D", "name":  "Henrique Cesar Adao da Silva", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "323", "spot":  "F", "name":  "Lucas Farias de Almeida", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "324", "spot":  "B", "name":  "Davi Herculano Vasconcelos Barroso", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "324", "spot":  "D", "name":  "Matheus Mendes Costa Ayres Camargo", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "324", "spot":  "F", "name":  "Felipe Tuyama de Faria Barbosa", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "A", "name":  "Nilo Daniel Moura Moreira", "nickname":  "Nilo", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "B", "name":  "Jos_ Oleg\x88rio De Oliveira Neto", "nickname":  "Olegario", "course":  "ELE", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "C", "name":  "Thiago Ordonho Araujo", "nickname":  "Pedreiro", "course":  "CIV", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "D", "name":  "T\x88cio Guardi Tavares", "nickname":  "Grisalho", "course":  "COMP", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "E", "name":  "Matheus Henrique Barboza", "nickname":  "Crianca", "course":  "CIV", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "325", "spot":  "F", "name":  "Rafael Macedo Trindade", "nickname":  "Urubu", "course":  "ELE", "grad_year":  "T.13'", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "326", "spot":  "A", "name":  "Ricardo Maia Senna Delgado", "nickname":  "Vibrador", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "326", "spot":  "C", "name":  "Thales Ernesto Solon De Mello Neto", "nickname":  "Folgado", "course":  "COMP", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "326", "spot":  "E", "name":  "Renato Paraense Godinho", "nickname":  "Sebrae", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "326", "spot":  "F", "name":  "Paulo Augusto Tostes Junior", "nickname":  "Paulo", "course":  "AER", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "327", "spot":  "B", "name":  "Lucas Kazunori Kobo", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "327", "spot":  "D", "name":  "Francisco Raul Lobo Rodrigues", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "327", "spot":  "F", "name":  "Philip Guedes de Lima", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "328", "spot":  "B", "name":  "Joao Antonio Dantas de Jesus Ferreira", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "328", "spot":  "C", "name":  "Thiago De Oliveira Silvino", "nickname":  "Fininha", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "328", "spot":  "D", "name":  "Gustavo Carvalho De Melo Virgolino", "nickname":  "Lastimavel", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "328", "spot":  "E", "name":  "Joao Luis Timbo Gomes", "nickname":  "Gengis Khan", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H - 8 C", "apt":  "328", "spot":  "F", "name":  "Adriano Oliveira Dantas", "nickname":  "Adriano", "course":  "2FUND", "grad_year":  "T.15'", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "329", "spot":  "B", "name":  "Yuri Antonio Brandes Costa Barbosa", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "329", "spot":  "D", "name":  "Fernando Ribeiro dos Santos", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "329", "spot":  "F", "name":  "Ilmo Caldas Neto", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "330", "spot":  "B", "name":  "Jose Guilherme Godoi Alves", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "330", "spot":  "D", "name":  "Lucas de Oliveira Silva", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H - 8 C ", "apt":  "330", "spot":  "F", "name":  "Leonardo Jose Bessa Gadelha", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H20A", "apt":  "110", "spot":  null, "name":  "Lucas Facury de Paula Moreira", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H20A", "apt":  "110", "spot":  null, "name":  "Gabriel Amboss Pinto", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H20A", "apt":  "110", "spot":  null, "name":  "Jean Pablo Sousa Rabelo", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H20A", "apt":  "110", "spot":  null, "name":  "Henrique Gasparini Fiuza do Nascimento", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H20A", "apt":  "110", "spot":  null, "name":  "Daniel Schwalbe Koda", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H27A", "apt":  "120", "spot":  null, "name":  "Rogerio Veras De Vasconcelos              ", "nickname":  "Rogerio", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H27A", "apt":  "120", "spot":  null, "name":  "Jefferson Rodrigues De Sousa              ", "nickname":  "Bandido", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H27A", "apt":  "120", "spot":  null, "name":  "Giovanni Fiorenza Munaretto               ", "nickname":  "Juana", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H32A", "apt":  "108", "spot":  null, "name":  "Edson Brasil Sousa", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H32A", "apt":  "108", "spot":  null, "name":  "Rodolfo Teixeira Martins", "nickname":  null, "course":  "1FUND", "grad_year":  "T.17", "url":  null}
,{"quarter":  "H32A", "apt":  "108", "spot":  null, "name":  "VAGO", "nickname":  null, "course":  null, "grad_year":  null, "url":  null}
,{"quarter":  "H20B", "apt":  "111", "spot":  null, "name":  "Leonardo Cesar Sousa Campos", "nickname":  "Balde", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "111", "spot":  null, "name":  "Ivan Guilhon Mitoso Rocha", "nickname":  "Salsicha", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "111", "spot":  null, "name":  "Kalil Gebrim Rodrigues", "nickname":  "Moleque Doido", "course":  "CIV", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "113", "spot":  null, "name":  "Erich Rommel De Sousa Rego ", "nickname":  "Decimo", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "113", "spot":  null, "name":  "Murilo Borges Ara\xECjo", "nickname":  "Alaska", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "113", "spot":  null, "name":  "Victor Da Silva Montalvao", "nickname":  "Montalvao", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "113", "spot":  null, "name":  "Adan Vitor Alves Oliveira", "nickname":  "13", "course":  "1PROF", "grad_year":  "T.14'", "url":  null}
,{"quarter":  "H20B", "apt":  "114", "spot":  null, "name":  "Leandro Scopel Campagnaro", "nickname":  "Leitinho", "course":  "AESP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "114", "spot":  null, "name":  "Henrique Fanini Leite", "nickname":  "Ventilador", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "114", "spot":  null, "name":  "Arthur Silva Costa Ferreira", "nickname":  "Nhonho", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "116", "spot":  null, "name":  "Rodrigo Pereira De Lemos", "nickname":  "Kaicara", "course":  "ELE", "grad_year":  "T.13", "url":  null}
,{"quarter":  "H20B", "apt":  "116", "spot":  null, "name":  "Marcus Gualberto Ganter De Moura", "nickname":  "Ganter", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "116", "spot":  null, "name":  "Rodrigo Castellari Affonso", "nickname":  "Castellove", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H20B", "apt":  "116", "spot":  null, "name":  "Henrique Ressel Flores                    ", "nickname":  "Gaucho", "course":  "2FUND", "grad_year":  "T.16", "url":  null}
,{"quarter":  "H22A", "apt":  "111", "spot":  null, "name":  "Henrique Kazuya Kikuchi", "nickname":  "Chatuya", "course":  "AER", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "111", "spot":  null, "name":  "Lucas Amaral Cunha De Assis", "nickname":  "Evo", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "111", "spot":  null, "name":  "Luiz Henrique Lindquist Whitacker", "nickname":  "Zero Dois", "course":  "AESP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "111", "spot":  null, "name":  "Thiago Augusto Da Silva Baleixo", "nickname":  "Dez", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "111", "spot":  null, "name":  "Vicente Carvalho Lima Filho", "nickname":  "Seven", "course":  "ELE", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "112", "spot":  null, "name":  "Ant\xBBnio Eduardo Vale de Azeredo", "nickname":  "Dudu", "course":  "1PROF", "grad_year":  "T.14'", "url":  null}
,{"quarter":  "H22A", "apt":  "112", "spot":  null, "name":  "Eduardo Jorge De Araujo Jorge Filho", "nickname":  "Gaguinho", "course":  "AESP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "112", "spot":  null, "name":  "Gustavo Loureiro Dos Reis", "nickname":  "Lorero", "course":  "COMP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "112", "spot":  null, "name":  "Renan Lima Novais", "nickname":  "Renan", "course":  "MEC", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "112", "spot":  null, "name":  "Taina Alves Damasceno", "nickname":  "Taina", "course":  "AESP", "grad_year":  "T.14", "url":  null}
,{"quarter":  "H22A", "apt":  "123", "spot":  null, "name":  "Diogo Silva Freitas", "nickname":  "Neymar", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "123", "spot":  null, "name":  "Guilherme Da Rocha Dahrug", "nickname":  "Mijao", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "123", "spot":  null, "name":  "Pablo Rodrigo Fontes De Miranda", "nickname":  "Toddynho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "123", "spot":  null, "name":  "Joel Moreira Freitas", "nickname":  "Fei", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "124", "spot":  null, "name":  "Cassio Dos Santos Sousa", "nickname":  "Cassio", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "124", "spot":  null, "name":  "Felipe Rodrigo Evangelista Matilde ", "nickname":  "Matilde", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "124", "spot":  null, "name":  "Paulo Ricardo Israel De Oliveira", "nickname":  "Rasga Mae", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H22A", "apt":  "124", "spot":  null, "name":  "Ubiratan Brasilino De Castro A.Silva", "nickname":  "Bira", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H27B", "apt":  "119", "spot":  null, "name":  "Gustavo Barros Viana Moreira", "nickname":  "Rancho", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H27B", "apt":  "119", "spot":  null, "name":  "Nicolas Cruvinel Lindo ", "nickname":  "Belo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
,{"quarter":  "H27B", "apt":  "119", "spot":  null, "name":  "Agnaldo Luiz De Carvalho Junqueira Cunha", "nickname":  "Agnaldo", "course":  "1PROF", "grad_year":  "T.15", "url":  null}
];


}