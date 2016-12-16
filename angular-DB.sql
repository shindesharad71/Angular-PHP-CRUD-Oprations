-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2016 at 07:26 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular`
--

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `name`, `email`, `password`) VALUES
(1196, 'Shawn Hudson', 'shudson0@over-blog.com', 'jRX9yqIeki'),
(1197, 'Emily Fernandez', 'efernandez1@etsy.com', '5YyEGl0N'),
(1198, 'Paul Harper', 'pharper2@oaic.gov.au', 'ULCfzTCvFH'),
(1199, 'Kathleen Morrison', 'kmorrison3@wix.com', 'B4LtpxuKhA'),
(1200, 'Martin Hayes', 'mhayes4@auda.org.au', 'pIp6wMJ1KI'),
(1201, 'Eugene Torres', 'etorres5@xinhuanet.com', '6YMspfp'),
(1202, 'Samuel Greene', 'sgreene6@hao123.com', 'WJsjJj4'),
(1203, 'Christine Black', 'cblack7@printfriendly.com', 'yydQ56Rp'),
(1204, 'Antonio Johnson', 'ajohnson8@blogspot.com', '81dhNC'),
(1205, 'Melissa Andrews', 'mandrews9@usnews.com', 'CnO0s3REn'),
(1206, 'Sharad Shinde', 'shindesharad71@gmail.com', '12345tre');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1207;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
