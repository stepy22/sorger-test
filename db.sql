-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 05, 2022 at 02:14 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `spicyMeal`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
                             `id` int(11) NOT NULL,
                             `CustomerName` varchar(40) COLLATE utf8_bin NOT NULL,
                             `Phone` varchar(20) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`id`, `CustomerName`, `Phone`) VALUES
(1, 'John Smith', '555-555-1234'),
(2, 'Mary Washcloth', '444-333-2211'),
(3, 'Joe Sixpack', '333-444-5567'),
(4, 'Sally Strauss', '123-123-1236'),
(5, 'John Caterer', '444-332-5152');

-- --------------------------------------------------------

--
-- Table structure for table `orderItems`
--

CREATE TABLE `orderItems` (
                              `id` int(11) NOT NULL,
                              `OrderId` int(11) NOT NULL,
                              `ProductId` int(11) NOT NULL,
                              `UnitPrice` decimal(12,2) NOT NULL,
                              `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `orderItems`
--

INSERT INTO `orderItems` (`id`, `OrderId`, `ProductId`, `UnitPrice`, `Quantity`) VALUES
(28, 31, 2, '6.00', 2),
(29, 31, 2, '6.00', 2),
(30, 32, 2, '6.00', 2),
(31, 32, 2, '6.00', 2),
(32, 33, 2, '6.00', 2),
(33, 33, 2, '6.00', 2),
(34, 34, 2, '6.00', 2),
(35, 34, 2, '6.00', 2),
(36, 35, 2, '6.00', 2),
(37, 35, 2, '6.00', 2),
(38, 36, 2, '6.00', 2),
(39, 36, 2, '6.00', 2),
(40, 37, 2, '6.00', 2),
(41, 37, 2, '6.00', 2),
(42, 38, 2, '6.00', 2),
(43, 38, 2, '6.00', 2),
(44, 39, 2, '6.00', 2),
(45, 39, 2, '6.00', 2),
(46, 40, 2, '6.00', 2),
(47, 40, 2, '6.00', 2),
(48, 41, 2, '6.00', 2),
(49, 41, 2, '6.00', 2),
(50, 42, 2, '6.00', 2),
(51, 42, 2, '6.00', 2),
(52, 43, 2, '6.00', 2),
(53, 43, 2, '6.00', 2),
(54, 44, 2, '6.00', 2),
(55, 44, 2, '6.00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
                          `id` int(11) NOT NULL,
                          `OrderNumber` varchar(10) COLLATE utf8_bin DEFAULT NULL,
                          `CustomerId` int(11) NOT NULL,
                          `OrderDate` date DEFAULT NULL,
                          `TotalAmount` decimal(12,2) NOT NULL,
                          `fullfilled` tinyint(1) DEFAULT NULL,
                          `is_vegan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `OrderNumber`, `CustomerId`, `OrderDate`, `TotalAmount`, `fullfilled`, `is_vegan`) VALUES
(1, '55123', 1, '2022-01-01', '100.00', NULL, NULL),
(2, '55124', 2, '2022-01-10', '121.00', NULL, NULL),
(3, '55125', 1, '2022-01-15', '44.00', NULL, NULL),
(4, '55126', 4, '2022-01-17', '56.00', NULL, NULL),
(5, '55127', 5, '2022-01-28', '25.00', NULL, NULL),
(6, '55128', 3, '2022-01-29', '16.00', NULL, NULL),
(7, '55129', 3, '2022-01-31', '70.00', NULL, NULL),
(8, '55130', 4, '2022-02-01', '16.00', NULL, NULL),
(9, '55131', 4, '2022-02-05', '24.00', NULL, NULL),
(10, '55132', 1, '2022-02-15', '100.00', NULL, NULL),
(12, '551321', 1, '2022-03-04', '500.00', NULL, NULL),
(13, '5513211', 1, '2022-03-04', '500.00', NULL, NULL),
(14, '55132111', 1, '2022-03-04', '500.00', NULL, NULL),
(15, '55132112', 1, '2022-03-04', '500.00', NULL, NULL),
(16, '55132113', 1, '2022-03-04', '500.00', NULL, NULL),
(17, '55132114', 1, '2022-03-04', '500.00', NULL, NULL),
(18, '55132115', 1, '2022-03-04', '500.00', NULL, NULL),
(19, '55132116', 1, '2022-03-04', '24.00', NULL, NULL),
(20, '55132117', 1, '2022-03-04', '24.00', NULL, NULL),
(21, '55132118', 1, '2022-03-04', '24.00', NULL, NULL),
(22, '55132119', 1, '2022-03-04', '24.00', NULL, NULL),
(23, '55132120', 1, '2022-03-04', '24.00', NULL, NULL),
(24, '55132121', 1, '2022-03-04', '24.00', NULL, NULL),
(25, '55132122', 1, '2022-03-04', '24.00', NULL, NULL),
(26, '55132123', 1, '2022-03-04', '24.00', NULL, NULL),
(27, '55132124', 1, '2022-03-04', '24.00', NULL, NULL),
(28, '55132125', 1, '2022-03-04', '24.00', NULL, NULL),
(29, '55132126', 1, '2022-03-04', '24.00', NULL, NULL),
(30, '55132127', 1, '2022-03-04', '24.00', NULL, NULL),
(31, '55132128', 1, '2022-03-04', '24.00', NULL, NULL),
(32, '55132129', 1, '2022-03-04', '24.00', NULL, NULL),
(33, '55132130', 1, '2022-03-04', '24.00', NULL, NULL),
(34, '55132131', 1, '2022-03-04', '24.00', NULL, NULL),
(35, '55132132', 1, '2022-03-04', '24.00', NULL, NULL),
(36, '55132133', 1, '2022-03-04', '24.00', NULL, 1),
(37, '55132134', 1, '2022-03-04', '24.00', NULL, 1),
(38, '55132135', 1, '2022-03-04', '24.00', NULL, 1),
(39, '55132136', 1, '2022-03-03', '24.00', NULL, 1),
(40, '55132136', 1, '2022-03-03', '24.00', NULL, 1),
(41, '55132136', 1, '2022-03-04', '24.00', NULL, 1),
(42, '55132137', 1, NULL, '24.00', NULL, 1),
(43, '55132137', 1, '2022-03-03', '24.00', NULL, 1),
(44, '55132137', 1, '2022-03-04', '24.00', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
                            `ProductId` int(11) NOT NULL,
                            `ProductName` varchar(50) COLLATE utf8_bin NOT NULL,
                            `UnitPrice` decimal(12,2) DEFAULT NULL,
                            `IsVegan` bit(1) NOT NULL,
                            `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                            `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `ProductName`, `UnitPrice`, `IsVegan`, `createdAt`, `updatedAt`) VALUES
(1, 'Spicy Pork Sausage', '8.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(2, 'Lean Hamburger', '6.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(3, 'Angus Steak', '12.00', b'0', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(4, 'Chicken Breast', '10.00', b'0', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(5, 'Impossible Sausage', '15.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(6, 'Beyond Meat Hotdog', '11.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(7, 'Cauliflower Wings', '13.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04'),
(8, 'Spicy Pickles', '4.00', b'1', '2022-03-04 08:45:04', '2022-03-04 08:45:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
    ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `AK1_Customer_CustomerName` (`CustomerName`);

--
-- Indexes for table `orderItems`
--
ALTER TABLE `orderItems`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
    ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `FK_Order_CustomerId_Customer` (`CustomerId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
    ADD PRIMARY KEY (`ProductId`),
  ADD UNIQUE KEY `AK1_Product_SupplierId_ProductName` (`ProductName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customers`
--
ALTER TABLE `Customers`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orderItems`
--
ALTER TABLE `orderItems`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
    MODIFY `ProductId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
    ADD CONSTRAINT `FK_Order_CustomerId_Customer` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`id`);
