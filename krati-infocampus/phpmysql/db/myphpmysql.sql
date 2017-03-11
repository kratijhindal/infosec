-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2017 at 12:50 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `myphpmysql`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE IF NOT EXISTS `city` (
`cityid` int(11) NOT NULL,
  `cityname` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cityid`, `cityname`) VALUES
(1, 'Bangalore'),
(2, 'Kolkata'),
(3, 'Chennai'),
(4, 'Hydrabad'),
(5, 'Mangalore'),
(6, 'Patna');

-- --------------------------------------------------------

--
-- Table structure for table `hobbies`
--

CREATE TABLE IF NOT EXISTS `hobbies` (
`hobbieid` int(11) NOT NULL,
  `hobbiename` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `hobbies`
--

INSERT INTO `hobbies` (`hobbieid`, `hobbiename`) VALUES
(1, 'Playing'),
(2, 'Singing'),
(3, 'Dancing'),
(4, 'Writing'),
(5, 'Swiming');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE IF NOT EXISTS `photo` (
`photoid` int(11) NOT NULL,
  `photoname` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`photoid`, `photoname`) VALUES
(1, '1483443958Chrysanthemum.jpg'),
(2, '1483443966Hydrangeas.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` bigint(13) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `hobbie` varchar(255) NOT NULL,
  `gender` varchar(5) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `mobile`, `address`, `city`, `hobbie`, `gender`) VALUES
(7, 'admin B', 'admin', '1234', 9999999999, 'bangalore marathahalli 560036', 'Kolkata', 'Dancing,Playing,Singing,Swiming,Writing', 'M'),
(8, 'Siyaram 2', 'siyaram2', '123', 8888888888, 'chennai.', 'Bangalore', 'Playing,Singing,Swiming', 'F'),
(9, 'Siyaram 3', 'admin2', '123', 9999999999, 'ramu jee film city', 'Hydrabad', 'Dancing,Singing,Writing', 'M'),
(10, 'Siyaram 2', 'a', 'a', 9999999999, 'ghghgh', 'Hydrabad', 'Dancing,Singing,Writing', 'M'),
(11, 'SIYARAM', 's@gmail.com', '123', 123, 'marthhh', 'Chennai', 'Playing,Swiming', 'M');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
 ADD PRIMARY KEY (`cityid`);

--
-- Indexes for table `hobbies`
--
ALTER TABLE `hobbies`
 ADD PRIMARY KEY (`hobbieid`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
 ADD PRIMARY KEY (`photoid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
MODIFY `cityid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `hobbies`
--
ALTER TABLE `hobbies`
MODIFY `hobbieid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
MODIFY `photoid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
