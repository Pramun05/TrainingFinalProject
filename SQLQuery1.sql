use General_Insurance

CREATE TABLE [Customer_Registration] (
	CID int identity NOT NULL,
	Last_Name char(25),
	FirstName char(25) NOT NULL,
	Address varchar(255) NOT NULL,
	Password varchar(255) NOT NULL,
	DOB date NOT NULL,
	Mobile_Number bigint NOT NULL,
	Email varchar(255) NOT NULL,
  CONSTRAINT [PK_CUSTOMER_REGISTRATION] PRIMARY KEY CLUSTERED
  (
  [Email] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Customer_Registration(Last_Name,FirstName,Address,Password,DOB,Mobile_Number,Email) values

('Kumar','Suresh','Tamilnadu','suresh','1998-1-10',9962525408,'suresh@gmail.com'),

('Kumar','Ramesh','Tamilnadu','ramesh','1998-1-11',9962525478,'ramesh@gmail.com'),

('Smith','James','Bangalore','james','1998-2-10',9962625408,'james@gmail.com'),

('Garcia','Riya','Mumbai','Riya','1998-3-11',9658784512,'riya@gmail.com'),

('Smith','Michael ','Mumbai','michael','1995-6-10',6300254178,'michael@gmail.com'),

('Smith','Robert ','Mumbai','robert','1997-4-20',9658784452,'robert@gmail.com'),

('Smith','David','Bangalore','david','1995-2-10',965877754,'david@gmail.com'),

('Smith','Mary','Bangalore','mary','1994-3-16',9962627894,'mary@gmail.com'),

('Martinez','Maria ','pune','maria','1997-7-22',965845812,'maria@gmail.com'),

('Johnson','Peter','pune','peter','1992-4-30',9964568508,'peter@gmail.com')
select *from Customer_Registration
drop table Customer_Registration
CREATE TABLE [Vechile_Insurance] (
	Manufacturer varchar(255) NOT NULL,
	Model varchar(255) NOT NULL,
	Driving_Licence varchar(255) NOT NULL,
	Purchase_Date date NOT NULL,
	Registration_Number varchar(255) NOT NULL UNIQUE,
	Engine_Number varchar(255) NOT NULL UNIQUE,
	Chassis_Number varchar(255) NOT NULL UNIQUE,
	CID integer NOT NULL UNIQUE identity,
	Vehicle_Type varchar(255) NOT NULL,
	Planno integer,
	Email varchar(255) NOT NULL,
  CONSTRAINT [PK_VECHILE_INSURANCE] PRIMARY KEY CLUSTERED
  (
  [Registration_Number] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Vechile_Insurance(Manufacturer,Model,Driving_Licence,Purchase_Date,Registration_Number,Engine_Number,Chassis_Number,Vehicle_Type,Planno,Email) values



('Maruti_Suzuki','Celerio','TN19 2017 0004188','2021-5-14','TN14-T-7075','52WVC10054','KM8JT3AC2DU583865','4-Wheeler','1','suresh@gmail.com'),

('Maruti_Suzuki','Alto','TN20 2017 0004188','2022-3-14','TN20-T-7085','55WVC18854','JH4KA3261JC024072','4-Wheeler','1','ramesh@gmail.com'),

('Maruti_Suzuki','Swift','TN21 2017 0004188','2019-5-14','TN22-B-1235','53WVC15554','JN8AZ1MU7AW004224','4-Wheeler','2','james@gmail.com'),

('Maruti_Suzuki','Swift Dezire','TN22 2017 0004188','2021-3-14','TN41-T-1258','55WVC18954','TRUTC28N611004782','4-Wheeler','1','riya@gmail.com'),

('Hundai','Creta','TN24 2017 0004188','2021-6-17','TN45-D-5689','52WVC78944','1J4FJ78L5KL535075','4-Wheeler','2','michael@gmail.com'),

('Hundai','Verna','TN81 2017 0004188','2021-9-14','TN64-A-7945','52WVC18884','JH4KA7560NC004288','4-Wheeler','1','robert@gmail.com'),

('Hundai ','Venue','TN32 2017 0004188','2021-9-23','TN12-C-4236','52WVC12254','2FAFP73W1WX172908','4-Wheeler','1','david@gmail.com'),

('Hundai ','Alcazar','TN45 2017 0004188','2021-7-14','TN01-S-0001','52WVC16354','WAUDGAFL6DA095049','4-Wheeler','2','mary@gmail.com'),

('Honda','City','TN31 2017 0004188','2021-2-24','TN22-T-7845','52WVC19654','1B4HS28N51F547639','4-Wheeler','1','maria@gmail.com'),
('TVS','Wego','TN19 2017 0004190','2021-11-14','TN14-T-8075','52WVC10056','KM8JT3AC2DU585687','2-Wheeler','2','mahesh@gmail.com')

select * from Vechile_Insurance
drop table Vechile_Insurance

CREATE TABLE [Plans] (
	PlanType varchar(255) NOT NULL,
	Plan_Duration varchar(255) NOT NULL,
	Planno integer NOT NULL,
  CONSTRAINT [PK_PLANS] PRIMARY KEY CLUSTERED
  (
  [Planno] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Plans(PlanType,Plan_Duration,Planno) values
('Third Party Liability','1 year',1),
('Third Party Liability','2 years',2),
('Third Party Liability','3 years',3),
('Comprehensive','1 year',4),('Comprehensive','2 years',5),('Comprehensive','3 years',6)select * from PlansCREATE TABLE [Payment] (
	policy_Number integer  NOT NULL,
	Payment_Mode varchar(255) NOT NULL,
	Bank varchar(255) NOT NULL,
	DateofPayment date NOT NULL,
	paymentID integer NOT NULL,
	Amount float NOT NULL,
  CONSTRAINT [PK_PAYMENT] PRIMARY KEY CLUSTERED
  (
  [paymentID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)insert into Payment(policy_Number,Payment_Mode,Bank,DateofPayment,paymentID,Amount) values                    (2894061,'Debit Card','ICICI','2021-09-22',100,6000),					(2894062,'Credit Card','SBI','2021-07-21',101,6500),					(2894063,'UPI','Axis','2021-12-10',102,17000),					(2894064,'Debit Card','HDFC','2021-08-20',103,7000),					(2894065,'Credit Card','BOI','2021-09-15',104,8000),					(2894066,'UPI','ICICI','2021-03-6',105,21000),					(2894067,'credit Card','BOI','2021-12-25',106,9000),					(2894068,'Debit Card','ICICI','2021-11-01',108,10000),					(2894069,'UPI','Kotak','2021-11-05',109,25000),					(2894070,'Debit Card','SBI','2021-09-23',110,15000)
select *from Payment
drop table Payment

CREATE TABLE [Claim_History] (
	Policy_Number bigint NOT NULL UNIQUE,
	Date date NOT NULL,
	Approved_NotApproved varchar(255) NOT NULL,
	Amount float NOT NULL,
	Claim_No bigint NOT NULL,
	Mobile_Number bigint NOT NULL,
  CONSTRAINT [PK_CLAIM_HISTORY] PRIMARY KEY CLUSTERED
  (
  [Claim_No] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Claim_History(Policy_Number,Date,Approved_NotApproved,Amount,Claim_No,Mobile_Number)values
                         (2894071,'2021-10-22','Approved',200000, 200, 9658784512),
						 (2894072,'2021-08-22','Approved',300000, 201, 6300254178),
						 (2894073,'2021-12-25','Approved',100000, 202, 9658784452),
						 (2894074,'2021-10-22','Approved',500000, 203, 965877754),
						 (2894075,'2021-10-22','Approved',700000, 204, 965845812)
select * from Claim_History
drop table Claim_History



CREATE TABLE [Admin] (
	AdminID integer NOT NULL,
	Password varchar(255) NOT NULL,
  CONSTRAINT [PK_ADMIN] PRIMARY KEY CLUSTERED
  (
  [AdminID] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into Admin(AdminID,Password) values
(1,'suresh'),(2,'ramesh'),(3,'riya'),(4,'siya123'),(5,'miya456')

select * from Admin

drop table Admin

CREATE TABLE [Vechile_type] (
	Sno integer NOT NULL IDENTITY,
	Vechile_Type varchar(255) NOT NULL,
	Registration_Number varchar(255) NOT NULL,
  CONSTRAINT [PK_VECHILE_TYPE] PRIMARY KEY CLUSTERED
  (
  [Sno] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
insert into Vechile_type(Vechile_Type,Registration_Number) values

('2-Wheeler','TN14-T-8075' ),

('4-Wheeler','TN14-T-7075' )

CREATE TABLE [PolicyType] (
	Policy_Number bigint NOT NULL IDENTITY (2894061,1) ,
	Mobile_Number bigint NOT NULL,
	Email varchar(255) NOT NULL,
	planno integer NOT NULL,
  CONSTRAINT [PK_POLICYTYPE] PRIMARY KEY CLUSTERED
  (
  [Policy_Number] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)

insert into PolicyType(Mobile_Number,Email,planno) values

(9962525408,'suresh@gmail.com',1 ),
(9962525478,'ramesh@gmail.com',2 ),
(9962625408,'james@gmail.com',3)

drop table PolicyType

CREATE TABLE [Insurance_Claims] (
	Policy_Number bigint NOT NULL UNIQUE,
	Mobile_Number bigint NOT NULL,
	Reason varchar(255) NOT NULL,
  CONSTRAINT [PK_INSURANCE_CLAIMS] PRIMARY KEY CLUSTERED
  (
  [Mobile_Number] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
insert into Insurance_Claims(Policy_Number,Mobile_Number,Reason) values

(2894071,9962525408,'NaturalDisaster' ),
(2894072,6300254178,'NaturalDisaster' ),
(2894073,9658784452,'NaturalDisaster' )

ALTER TABLE [Customer_Registration] WITH CHECK ADD CONSTRAINT [Customer_Registration_fk0] FOREIGN KEY ([Mobile_Number]) REFERENCES [Insurance_Claims]([Mobile_Number])
ON UPDATE CASCADE
GO
ALTER TABLE [Customer_Registration] CHECK CONSTRAINT [Customer_Registration_fk0]