-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: organDonation
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.17.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sections` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `heading` varchar(144) NOT NULL,
  `body` text NOT NULL,
  `updatedBy` varchar(60) DEFAULT NULL,
  `sectionNumber` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sectionNumber` (`sectionNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'What can you do in two minutes?','It only takes two minutes to register as an organ donor. If you’ve got an Ontario health card and two minutes you can save up to eight lives. Are you ready to make a difference? Click the link to register now, or keep scrolling to learn more.','Nicholas Lediet',1),(2,'Sign up now to save','There are more than 1,500 people in Ontario that are currently waiting for organ transplants that will save their lives. Registering as an organ donor is simple, fast, and generous. Curious about how it works? We can walk you through the process.','Nicholas Lediet',2),(3,'You can\'t get a haircut in two minutes','There are more than 1,500 people in Ontario that are currently waiting for organ transplants that will save their lives. Registering as an organ donor is simple, fast, and generous. Curious about how it works? We can walk you through the process.','Nicholas Lediet',3),(4,'You can\'t pick up a new hobby in two minutes','But two minutes of your life could save someone else’s.  In Ontario, organ and tissue donation is coordinated and managed by Trillium Gift of Life Network. Did you know, you are five times more likely to need an organ transplant than to have the opportunity to donate.','Nicholas Lediet',4),(5,'You can\'t run a marathon in two minutes','But two minutes of your life could save someone else’s.  Today, in Ontario, there are over 1,500 people waiting for a lifesaving organ transplant. Every 3 days someone will die because they did not get their transplant in time. But you can help. When you register your consent for organ and tissue donation, you let those waiting know that you would help them if you could.','Nicholas Lediet',5),(6,'You can\'t get ready for a party in two minutes','But two minutes of your life could save someone else’s.  Your decision to register is confidential. It is stored in a Ministry of Health and Long-Term Care database and it will only be disclosed to Trillium Gift of Life Network at the appropriate time, once it has been determined that lifesaving efforts have failed.','Nicholas Lediet',6),(7,'Register Today','It’s one of the most meaningful things you can do in the same amount of time it takes to scroll through your Instagram feed. All it takes is two minutes.','Nicholas Lediet',7);
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nicholas','Lediet','nicklediet@gmail.com','$2a$08$hCJmH3W4SP/1gdV1EeWs3.txEXDb8TBj16cN1mEBxcjzI9HZDGsy2');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-03 10:09:03
