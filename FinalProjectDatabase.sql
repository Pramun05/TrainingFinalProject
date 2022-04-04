create database General_Insurance

use General_Insurance

CREATE TABLE [Customer_Registration] (
	CID integer NOT NULL identity,
	Last_Name char(25),
	FirstName char(25) NOT NULL,
	Address varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	DOB date NOT NULL,
	Contact_No bigint NOT NULL,
	Email varchar(255) NOT NULL,
  CONSTRAINT [PK_CUSTOMER_REGISTRATION] PRIMARY KEY CLUSTERED
  (
  [Email] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

sp_help Customer_Registration

insert into Customer_Registration(Last_Name,FirstName,Address,Password,DOB,Contact_No,Email) values
('Kumar','Suresh','Tamilnadu','suresh','1998-1-10',9962525407,'suresh@gmail.com'),

('Kumar','Ramesh','Tamilnadu','ramesh','1998-1-11',9962525408,'ramesh@gmail.com'),

('Smith','James','Bangalore','james','1998-2-10',9962525409,'james@gmail.com')

select * from Customer_Registration

CREATE TABLE [Plans] (
	PlanType varchar(255) NOT NULL,
	Plan_Duration varchar(255) NOT NULL,
	Planno integer NOT NULL,
  CONSTRAINT [PK_PLANS] PRIMARY KEY CLUSTERED
  (
  [Planno] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
sp_help Plans

insert into Plans(PlanType,Plan_Duration,Planno ) values
('Third Party Liability','1 year','1' ),
('Third Party Liability','2 year','2' ),
('Third Party Liability','3 year','3' ),
('Comprehensive','1 year','4' ),
('Comprehensive','2 year','5' ),
('Comprehensive','3 year','6' )

select * from Plans

CREATE TABLE [Vehicle_Insurance] (
	Manufacturer varchar(255) NOT NULL,
	Model varchar(255) NOT NULL,
	Driving_Licence varchar(255) NOT NULL,
	Purchase_Date date NOT NULL,
	Registration_Number varchar(255) NOT NULL UNIQUE,
	Engine_Number varchar(255) NOT NULL UNIQUE,
	Chassis_Number varchar(255) NOT NULL UNIQUE,
	CID integer NOT NULL identity UNIQUE,
	Vehicle_Type varchar(255) NOT NULL,
	Email varchar(255),
  CONSTRAINT [PK_VEHICLE_INSURANCE] PRIMARY KEY CLUSTERED
  (
  [Registration_Number] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
 sp_help Vehicle_Insurance

 insert into Vehicle_Insurance(Manufacturer,Model,Driving_Licence,Purchase_Date,Registration_Number,Engine_Number,Chassis_Number,Vehicle_Type,Email) values
 ('Maruti_Suzuki','Celerio','TN19 2017 0004188','2021-5-14','TN14-T-7075','52WVC10054','KM8JT3AC2DU583865','4-Wheeler','suresh@gmail.com'),

('Maruti_Suzuki','Alto','TN20 2017 0004188','2022-3-14','TN20-T-7085','55WVC18854','JH4KA3261JC024072','4-Wheeler','ramesh@gmail.com'),

('Maruti_Suzuki','Swift','TN21 2017 0004188','2019-5-14','TN22-B-1235','53WVC15554','JN8AZ1MU7AW004224','4-Wheeler','james@gmail.com')

select * from Vehicle_Insurance

CREATE TABLE [Payment] (
	policy_Number integer NOT NULL,
	Payment_Mode varchar(255)NOT NULL,
	Bank varchar(255)NOT NULL,
	DateofPayment date NOT NULL,
	paymentID integer NOT NULL identity,
	Amount float NOT NULL,
  CONSTRAINT [PK_PAYMENT] PRIMARY KEY CLUSTERED
  (
  [paymentID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

sp_help Payment

insert into Payment(policy_Number,Payment_Mode,Bank,DateofPayment,Amount) values
(2894064,'card','SBI','2021-5-14',10000),
(2894065,'card','SBI','2022-3-14',10000),
(2894066,'card','SBI','2019-5-14',10000)

CREATE TABLE [Claim_History] (
	Policy_Number integer NOT NULL UNIQUE,
	Date date NOT NULL,
	Approved_NotApproved varchar(255) NOT NULL,
	Amount float NOT NULL,
	Claim_No integer NOT NULL identity,
	Contact_No bigint NOT NULL,
  CONSTRAINT [PK_CLAIM_HISTORY] PRIMARY KEY CLUSTERED
  (
  [Claim_No] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Claim_History(policy_Number,Date,Approved_NotApproved,Amount,Contact_No) values
(2894064,'2021-5-14','Approved',10000,9962525407),
(2894065,'2022-3-14','NotApproved',10000,9962525408),
(2894066,'2019-5-14','Approved',10000,9962525409)

CREATE TABLE [Insurance_Claims] (
	Policy_Number bigint NOT NULL UNIQUE,
	Contact_No bigint NOT NULL UNIQUE,
	Reason varchar(255),
  CONSTRAINT [PK_INSURANCE_CLAIMS] PRIMARY KEY CLUSTERED
  (
  [Contact_No] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
sp_help Insurance_Claims
insert into Insurance_Claims(policy_Number, Contact_No,Reason) values
(2894064 ,9962525407 , 'Natural Dis' ),
(2894065 ,9962525408 , 'Natural Dis' ),
(2894066 ,9962525409 , 'Natural Dis' )

CREATE TABLE [PolicyType] (
	Policy_Number bigint NOT NULL UNIQUE identity(2894070,1),
	Contact_No bigint NOT NULL,
	Email varchar(255)NOT NULL,
  CONSTRAINT [PK_POLICYTYPE] PRIMARY KEY CLUSTERED
  (
  [Email] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into PolicyType( Contact_No,Email)values
(9962525407,'suresh@gmail.com'),
(9962525408,'ramesh@gmail.com'),
(9962525409,'james@gmail.com')

select * from PolicyType

CREATE TABLE [Vechile_type] (
	Sno integer NOT NULL identity,
	Vechile_Type varchar(255) NOT NULL,
	Registration_Number varchar(255) NOT NULL,
  CONSTRAINT [PK_VECHILE_TYPE] PRIMARY KEY CLUSTERED
  (
  [Sno] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Vechile_type( Vechile_type,Registration_Number) values
('4-Wheeler','TN14-T-7075'),
('4-Wheeler','TN20-T-7085'),
('4-Wheeler','TN22-B-1235')

CREATE TABLE [Admin] (
	Email varchar(255)NOT NULL,
	Password varchar(255)NOT NULL,
  CONSTRAINT [PK_ADMIN] PRIMARY KEY CLUSTERED
  (
  [Email] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Admin(Email, Password) values
('rahul@gmail.com','rahul'),
('avinash@gmail.com','avinash'),
('dara@gmail.com','dara'),
('prasanna@gmail.com','prasanna')


create table Renew_Insurance(CID integer NOT NULL IDENTITY ,Registration_Number varchar(255) NOT NULL UNIQUE,Policy_Number integer NOT NULL,Mobilenumber Bigint NOT NULL,Paymentdate date NOT NULL,
	Email varchar(255) NOT NULL Primary Key)

	insert into Renew_Insurance(Registration_Number,Policy_Number,Mobilenumber,Paymentdate ,Email)values('52WVC10054',2894078,9962525408,'1998-1-10','suresh@gmail.com' )
	insert into Renew_Insurance(Registration_Number,Policy_Number,Mobilenumber,Paymentdate ,Email)values('52WVC10078',2894078,9962526708,'1997-1-10','ramesh@gmail.com' )

	select * from Renew_Insurance


ALTER TABLE [Vehicle_Insurance] WITH CHECK ADD CONSTRAINT [Vehicle_Insurance_fk0] FOREIGN KEY ([Email]) REFERENCES [Customer_Registration]([Email])
ON UPDATE CASCADE
GO
ALTER TABLE [Vehicle_Insurance] CHECK CONSTRAINT [Vehicle_Insurance_fk0]

ALTER TABLE [Payment] WITH CHECK ADD CONSTRAINT [Payment_fk0] FOREIGN KEY ([policy_Number]) REFERENCES [Plans]([Planno])
ON UPDATE CASCADE
GO
ALTER TABLE [Payment] CHECK CONSTRAINT [Payment_fk0]

ALTER TABLE [Claim_History] WITH CHECK ADD CONSTRAINT [Claim_History_fk0] FOREIGN KEY ([Contact_No]) REFERENCES [Insurance_Claims]([Contact_No])
ON UPDATE CASCADE
GO
ALTER TABLE [Claim_History] CHECK CONSTRAINT [Claim_History_fk0]


ALTER TABLE [Vechile_type] WITH CHECK ADD CONSTRAINT [Vechile_type_fk0] FOREIGN KEY ([Registration_Number]) REFERENCES [Vehicle_Insurance]([Registration_Number])
ON UPDATE CASCADE
GO
ALTER TABLE [Vechile_type] CHECK CONSTRAINT [Vechile_type_fk0]









