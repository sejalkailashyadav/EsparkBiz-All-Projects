-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: jwt
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `isActivated` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'keya ','keyabrot360@gmail.com','$2a$10$dCGvNQLlRAJjQkmWFXYH2e/wB9y28Xo87sfrjAymmUHoTQwBRsEO.','0'),(2,'sejal','sejalyadav@gmail.com','$2a$10$2WiuKLvTR4HMyRVuFHHQF.2ilVibnLvrbIKARuoU9WGigMGF9lKEy','0'),(3,'sid','sid@gmail.com','$2a$10$XJfImzMxB8Fl4iAS8k468eashmw0.u7wz4O8CwnJDkCp4rD08Sm9y','0'),(4,'seema','seema@gmail.com','$2a$10$MRZWSiKVhVdDQB6WQX0wTe9Ks9vKumX/DEJ2OA.2OGIQui1IatAuK','0'),(5,'nidhi','nishi@gmail.com','$2a$10$ht1S4QTi6daTCeV/kTZlKefLMlt3dAZlCkjfM.7uUUX//1a3mzJfK','0'),(6,'siddharth','siddharth111@gmail.com','$2a$10$8EYUaucVZaEeGAJJPA6/xORMLjrNM79TGoS1Qls4w1MRS//qDI7sW','0'),(7,'siddharth','siddharth111@gmail.com','$2a$10$dKzBLQd4M8uRO6qkZ.sB5.vmsN1PgVmiMCsuDu95xLL3aEsxD2HYa','0'),(8,'jiya','jiya360@gmail.com','$2a$10$lzzW8dMR49mRnwzAic4YKOXQw9QVIAcORX5aRK0xOUH7kP3r4U0M.','0'),(9,'jiya','jiya360@gmail.com','$2a$10$7B4z5IISUtqRlCh9n1cvluzXdCBlvsQSgr8VvGF3ylZOC31Prwl52','0'),(10,'jiya','jiya360@gmail.com','$2a$10$abwyu7Ym5zo8dxDxA6DX4e3kyW8u5KlBPbv.CopXfiBrhbH1QBGiK','0'),(11,'sejal ','sidpatel@gmail.com','$2a$10$wtxdJT0GxRt.ArPwu2nHqucli1.llmNe0hioduFOW5Oy5.rNKCvDS','0'),(12,'shrddha','shrddha@gmail.com','$2a$10$lrd2BpTe1ktBIpEuuv56QeJd.QUY2RJ/4MxLJwXjNjo3I2gsqTH7G','0'),(13,'shrddha','shrddha@gmail.com','$2a$10$GyItBO/I3kMlABCAwfEBqezvkxSnJtW/ZA7b1fUhDD8q8iO9MgVOu','0'),(14,'jalak','jalak360@gmail.com','$2a$10$E/azpyFcq3kyZFCKNA5pUeyVBDppHXBqtAA8V53qxFgIkpK0Qj36S','0'),(15,'jalak','jalak360@gmail.com','$2a$10$4Ej0daSi/VUfL3felvSWwOeWUskIHvgwk5AOQAh8i5b0kNbNPw67.','0'),(16,'kiya','kiyayadav@gmail.com','$2a$10$nOOE1C0HuVFEoXXkgSPhmeOzQV4Q2M9zTAOz3KyzzA8MiEL7.n4zC','0'),(17,'kiya','kiyayadav@gmail.com','$2a$10$vujWUtDHC4INLIKU.wMIxuFkcGqojlowCbnLN22iBCqYtmh8jFfq6','0'),(18,'keya ','keyabrot360@gmail.com','$2a$10$A7Gzg3ECzm/nrqQrack6XeDyVpLgLPkXg7XuYTpvpYcbdLNb8qxOC','0'),(19,'shrddha ','shrddha@gmail.com','$2a$10$FkzIqjztkgn3Z0b/8.G1TO9tqxNYQnH4jpS9wqF95cF1Khz.BM1kC','0'),(20,'sid','sid@gmail.com','$2a$10$zVb7CfbGJsCsB.4DprstEeOR.zOB3eMLkaAViZ9mMA4uGevUGg586','0'),(21,'lili','lii@gmail.com','$2a$10$Pem6a9JMUkLp2e682rEKXeibADnkyvahDDKjCS1Ab5BdAuw5i7X3q','0'),(22,'fiya','fiya@gmail.com','$2a$10$BtL/ROmkCdqU.i0Dk8YXsOpQlXJVSm0.C0f2J9BerCa3RHfjOnWn2','0'),(23,'hiya','hiya@gmail.com','$2a$10$5oKnUsvp7AFFRg99twxK4uOUxVMEV7oJmMy9LBrdN2l9kySAKFnhK','0'),(24,'ramu','ramu@gmail.com','$2a$10$qM9tnhTLJw9qmiZbTWqzHuY8sEeUsrLXJfy32BbvHVmRbMi7t1y1a','0'),(25,'piyu','pi@gmail.com','$2a$10$1Cj3ci/9xfynAXVATBYJ6eUBg2F5jMXPiAT/YL0mMp/S4mi.wq8Ni','0'),(26,'heli','heli@gmail.com','$2a$10$b1h67ESDrGfat9KjYJ2fuuJbq6pnSWveZL2JcK03LTekpIv1k/3mK','0'),(27,'maya','maya@gmail.com','$2a$10$xTfS2N4wk9hyQjLTbtXZ2uAcPBV0KJRvJMWujhJhj.0fR462DWqoa','0'),(28,'chaya','chaya@gmail.com','$2a$10$DNt.mgezQcGDlQ90eHbIgecWoQoqYNwCWoFfbvXN9It93unEvYk.u','0'),(29,'mahadev','mahadev@gmail.com','$2a$10$gjYjuw1.wCYr1YEykCk63uqhOxSYCAX2rhnhI6DjIpLSOWE5IgPhu','0'),(30,'om','om@gmail.com','$2a$10$0mjXiBldj0nMzN34qPLwOuEW3x0iU1.5Vc/UhPMlh1s/k5fHKFCVe','0'),(31,'om','om@gmail.com','$2a$10$xg0vCEPtMgh1ilam74Q08.Bxm7y1BYA.KefMXiY2WJbv7wwFP06.e','0'),(32,'om','om@gmail.com','$2a$10$dgjsrbjDVpA.gnbUPoNxt.9QvfIcCeo0EZiVYl.Y8FTuwkT7.OGzO','0'),(33,'om','om@gmail.com','$2a$10$JcBgpGsq5XBN0/FhsFLtPuQvfEapWxYkoyidirsWg/eclD/7RHapS','0'),(34,'yash','yash@gmail.com','$2a$10$T5F7P9bZnT8.ng1IBRcHeuwbmu2wOJOdeo7VD8v26QITXm4p1k0EC','0'),(35,'sid','keyabrot36011@gmail.com','$2a$10$CAhB0z/ilpqfP6r/BIcnfOGbkdxX9HujDKpBVQaNUArOLnJUkC6vS','0'),(36,'sid','keyabrot36011@gmail.com','$2a$10$TLzp.UZ7wX2codKiPfbD.u/UeC7yMiu8VIiSfwCtayhuvg0dA7SfG','0'),(37,'sid','sid123@gmail.com','$2a$10$ddSp2wv6XAweQYEw1Yvkc.QTs8VevtzQ85JgbYTbJSoeLglhAVBQy','0'),(38,'sid','sid123@gmail.com','$2a$10$3wXV6jxYRk.lQFbN3/m4wOFR/kYHhmR0F0BXJliLBbTINVz/bVI1O','0'),(39,'sid','sid1223@gmail.com','$2a$10$TkhZ3bIeS9gOAWG8XVDDUuIeYszmsWsDqt/ooExcLSSzmpdt56ybS','0'),(40,'sid','sid1223@gmail.com','$2a$10$roEu8Ig4cULyTfXSFNpISuasupn/oqnRKtDiewb3NlHdoD0PLcTH6','0'),(41,'sid','sid1223@gmail.com','$2a$10$WYHEGXqive9Z7lqlQ8CgReZFQ8XE93SWBAHBpo9T4lf6aqx1mcpSu','0'),(42,'sid','keyabrot133@gmail.com','$2a$10$ecTBJDgTkDRcnBr2hhsvvuzl57KLFYpVfCwSJFbKPs06ogLJ1beLi','0'),(43,'sid ','sid1234@gmail.com','$2a$10$7766qiO.YSEioDBZTrE/Yu1hICL0aaKcsfkiBn1hsMSbAx33TSDPC','1'),(44,'sid ','kb@gmail.com','$2a$10$SlLkZsg/avdEaTWDLEAbm.r1WMDNvYsDDLDlInw9UEU8xxLEC9zCK','1'),(45,'jooo','jooo@gmail.com','$2a$10$dsYVdHHIhIqVEXms2MGAX.TxVxevEqXJFr.Mbk3z54CCnOO7Bi1Ka','0'),(46,'jooo','jooo@gmail.com','$2a$10$rPEtDUUm5yRnty6yMospReDvWsoq6BWZ4waQ9GiCn5R73jsNr4JjC','0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-10  6:03:58
