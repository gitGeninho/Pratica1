create table Aula(
numAula int primary key,
musica varchar(30) not null,
textoAula ntext not null
)

create table Usuario(
nick varchar(20) primary key,
senha varchar(100) not null,
nome varchar(50) not null,
numAula int not null,
constraint fkAula foreign key(numAula) references Aula(numAula) 
)
