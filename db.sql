-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table start.failed_jobs
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.failed_jobs: ~0 rows (approximately)
DELETE FROM `failed_jobs`;

-- Dumping structure for table start.migrations
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.migrations: ~0 rows (approximately)
DELETE FROM `migrations`;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(5, '2023_12_02_051133_create_tasks_table', 2);

-- Dumping structure for table start.password_reset_tokens
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.password_reset_tokens: ~0 rows (approximately)
DELETE FROM `password_reset_tokens`;

-- Dumping structure for table start.personal_access_tokens
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.personal_access_tokens: ~46 rows (approximately)
DELETE FROM `personal_access_tokens`;
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 7, 'Dipika', 'c6ed021b90695256cdf4b8cdc9bace22e8781435c2cfe184d2b420b6954f5fdf', '["*"]', '2023-11-28 08:43:11', NULL, '2023-11-28 08:34:25', '2023-11-28 08:43:11'),
	(2, 'App\\Models\\User', 7, 'Dipika', '07df6723bb56ec69410851612ce39479107ce2a6c229b481f45721ed22255e48', '["*"]', '2023-11-28 08:45:32', NULL, '2023-11-28 08:45:08', '2023-11-28 08:45:32'),
	(3, 'App\\Models\\User', 7, 'Dipika', '37968b8209995093d7e91ac367ffcb0264e7761fdb663b5487258cfe1882423f', '["*"]', NULL, NULL, '2023-11-30 08:39:25', '2023-11-30 08:39:25'),
	(4, 'App\\Models\\User', 8, 'Dipika', 'f751e8a17e116d73c2e3f9115e2d017577408e29befd7ec7885de115922c7c6b', '["*"]', NULL, NULL, '2023-11-30 08:47:48', '2023-11-30 08:47:48'),
	(5, 'App\\Models\\User', 7, 'Dipika', '145b61af531f7b1e89dec714fcafe23c4d5c582e060511c3c71c28b88878fd8d', '["*"]', NULL, NULL, '2023-12-01 05:02:58', '2023-12-01 05:02:58'),
	(6, 'App\\Models\\User', 8, 'Dipika', '799dd28db7a8214108d4454b3a4ae3823efeb647dbab026533be56b75235d386', '["*"]', NULL, NULL, '2023-12-01 05:03:37', '2023-12-01 05:03:37'),
	(7, 'App\\Models\\User', 8, 'Dipika', 'ec2af7ac9d5f72e63714c3f23ccef45a119e2fe1d604eedaffa091a754cb42eb', '["*"]', NULL, NULL, '2023-12-01 05:09:59', '2023-12-01 05:09:59'),
	(8, 'App\\Models\\User', 8, 'Dipika', '8e21b67a852031d697a6f9944951e86b51b7a562c9f357c09b8c963d6ff922ff', '["*"]', NULL, NULL, '2023-12-01 05:21:54', '2023-12-01 05:21:54'),
	(9, 'App\\Models\\User', 8, 'Dipika', 'bcde50f828fb834188b3e3d19e32b952aa8c4cc2714cb0aeb39963f2a67a4ab9', '["*"]', NULL, NULL, '2023-12-01 05:26:15', '2023-12-01 05:26:15'),
	(10, 'App\\Models\\User', 1, 'Dipika', '0bcb9ab8c26d5683f78b2af67be716463f9bbcfcc50b25753d94e8ef1f09c02b', '["*"]', NULL, NULL, '2023-12-01 05:28:19', '2023-12-01 05:28:19'),
	(11, 'App\\Models\\User', 8, 'Dipika', 'c23229d9c026bcb592412816348f632eb2f5556205f3b5aa974d962ae9900a6c', '["*"]', NULL, NULL, '2023-12-01 23:13:03', '2023-12-01 23:13:03'),
	(12, 'App\\Models\\User', 8, 'Dipika', '419b399355e719060703d27e9e3440b1e4ebd9bbdcca3eda632f557038368ae8', '["*"]', NULL, NULL, '2023-12-01 23:13:03', '2023-12-01 23:13:03'),
	(13, 'App\\Models\\User', 4, 'Dipika', 'f89d0618b8a83eb41aa1ed6d94f8945821211a74f9a3c50e28e15f162a5eb2e8', '["*"]', NULL, NULL, '2023-12-01 23:14:18', '2023-12-01 23:14:18'),
	(14, 'App\\Models\\User', 4, 'Dipika', 'fb52c06099b56af77f03027a06bd38cfe9d5cbe43a22e9d8f61fba715fbbf3b7', '["*"]', '2023-12-02 05:32:50', NULL, '2023-12-01 23:28:39', '2023-12-02 05:32:50'),
	(15, 'App\\Models\\User', 7, 'Dipika', '7bbc6aa533f2ddf9a2ad9f693eafe7efa2a87023dcd11a277a5d55b7c9982c99', '["*"]', '2023-12-04 01:58:47', NULL, '2023-12-02 04:18:03', '2023-12-04 01:58:47'),
	(16, 'App\\Models\\User', 4, 'Dipika', '952c8ae332f7765f5f86feb34ed1bb55b70802c8c85c162e4a0eeb4ba8f1a98e', '["*"]', '2023-12-02 06:58:41', NULL, '2023-12-02 05:35:59', '2023-12-02 06:58:41'),
	(17, 'App\\Models\\User', 8, 'Dipika', 'bb16d2b2fcd80e08dd70179747acfc292668cde2cc8fb8d1a6a45fac59ec9285', '["*"]', NULL, NULL, '2023-12-02 22:11:21', '2023-12-02 22:11:21'),
	(18, 'App\\Models\\User', 8, 'Dipika', '7ea78f9da852b46c7466a0e569ae0cfc197da1fc906d9b01937e45a443ad36ef', '["*"]', '2023-12-03 00:18:16', NULL, '2023-12-02 22:11:21', '2023-12-03 00:18:16'),
	(19, 'App\\Models\\User', 8, 'Dipika', 'd3fafdac2f4735d5601fe15eeeb88146dbc63f8f1a2de5784bbeea05b63b9124', '["*"]', NULL, NULL, '2023-12-02 22:11:21', '2023-12-02 22:11:21'),
	(20, 'App\\Models\\User', 8, 'Dipika', 'b00de654b57b2839860482b3d8ddf4e897048fc94c6b04012452460d944230f1', '["*"]', '2023-12-03 00:31:18', NULL, '2023-12-03 00:21:41', '2023-12-03 00:31:18'),
	(21, 'App\\Models\\User', 4, 'Dipika', '369d693e56f2f0f345ab3c65d49645d3e97eaef06a24567390f076ca1da7b2b8', '["*"]', '2023-12-03 06:44:53', NULL, '2023-12-03 06:37:38', '2023-12-03 06:44:53'),
	(22, 'App\\Models\\User', 2, 'Dipika', '08dbc434bec0e8430798755166a7b72c941de9e53e10a57f9c78b9c103f87a56', '["*"]', '2023-12-03 22:59:00', NULL, '2023-12-03 06:49:21', '2023-12-03 22:59:00'),
	(23, 'App\\Models\\User', 9, 'Dipika', 'a0318e28e243ee16b0c51917cf2047e760eaf2f15defbb7e9f131cd8167b5f95', '["*"]', NULL, NULL, '2023-12-04 00:57:38', '2023-12-04 00:57:38'),
	(24, 'App\\Models\\User', 10, 'Dipika', '674aeed4b3b6e31a07e35e7af160226ea4d81e248be8bd1c0cbfa763bb55d419', '["*"]', NULL, NULL, '2023-12-04 00:58:00', '2023-12-04 00:58:00'),
	(25, 'App\\Models\\User', 10, 'Dipika', '75674331a1f30ecec5799f59f550d95e56120e4d4a574ebee250847b039e9126', '["*"]', NULL, NULL, '2023-12-04 00:59:38', '2023-12-04 00:59:38'),
	(26, 'App\\Models\\User', 7, 'Dipika', '36f7c07340cb802bfdbb2124306b2cfa179584b6f74748a320fb700c35cc5de8', '["*"]', NULL, NULL, '2023-12-04 01:10:16', '2023-12-04 01:10:16'),
	(27, 'App\\Models\\User', 7, 'Dipika', 'b447db2c976bab745966d05878f754f7b3bcfeb7bb392896beea07bc0462403f', '["*"]', NULL, NULL, '2023-12-04 01:10:55', '2023-12-04 01:10:55'),
	(28, 'App\\Models\\User', 7, 'Dipika', '0dd3ceefe78b6a6ddfaa081ccc4686752fc9e0a92535fda2b7e8860a293a9328', '["*"]', NULL, NULL, '2023-12-04 01:12:52', '2023-12-04 01:12:52'),
	(29, 'App\\Models\\User', 9, 'Dipika', 'd0bfaa83ef3e30849370492a2c57d9bd2063f6b221da80e232b59703a2a77e27', '["*"]', '2023-12-04 01:59:42', NULL, '2023-12-04 01:33:02', '2023-12-04 01:59:42'),
	(30, 'App\\Models\\User', 1, 'Dipika', '641d29e5b069fc86d916f50912cc6480c9bea798b0cfb2f8bd6df5acd9975020', '["*"]', NULL, NULL, '2023-12-04 02:00:42', '2023-12-04 02:00:42'),
	(31, 'App\\Models\\User', 2, 'Dipika', 'c838f55d0e54b53e7b6bea29098e256682cf640fa471fac12c25b1d2d57c9262', '["*"]', NULL, NULL, '2023-12-04 02:01:07', '2023-12-04 02:01:07'),
	(32, 'App\\Models\\User', 1, 'Dipika', 'a572bf37638a18621d0aeb25291694fba8202127a0dbaaa73b112321cfa3556b', '["*"]', '2023-12-04 02:45:15', NULL, '2023-12-04 02:07:52', '2023-12-04 02:45:15'),
	(33, 'App\\Models\\User', 2, 'Dipika', 'c7b0833e855f8da6bffc0f636d0fdb660faf4e25a3fcafa4416b422097f6a12d', '["*"]', '2023-12-04 02:51:11', NULL, '2023-12-04 02:42:56', '2023-12-04 02:51:11'),
	(34, 'App\\Models\\User', 1, 'Dipika', '21473bc4bb47ba7e6f6e51c456a9047e17254efe2f972d85092dd62e6bc72b56', '["*"]', '2023-12-04 02:56:56', NULL, '2023-12-04 02:51:34', '2023-12-04 02:56:56'),
	(36, 'App\\Models\\User', 1, 'Dipika', 'c3d6a4885105ac81b0f313b7517898c1834489dcbdeeb687bbd4a4a23da11d06', '["*"]', NULL, NULL, '2023-12-04 03:09:55', '2023-12-04 03:09:55'),
	(37, 'App\\Models\\User', 1, 'Dipika', '6705beabbcdf50e725296735d7ca54a8ac6b206f4dedbf74f09b705ea58f6a04', '["*"]', '2023-12-04 03:18:04', NULL, '2023-12-04 03:10:50', '2023-12-04 03:18:04'),
	(38, 'App\\Models\\User', 1, 'Dipika', '62cacf521e7525c161868f1158bd54e196267f1b90e42d966877feb9bb38b7e4', '["*"]', '2023-12-04 04:04:41', NULL, '2023-12-04 03:18:48', '2023-12-04 04:04:41'),
	(39, 'App\\Models\\User', 1, 'Dipika', '7e4fae5fe3dbce4d9f3529890ddc2732a99e396d5bd660ef0f32ca8ff1ba6f89', '["*"]', NULL, NULL, '2023-12-04 05:07:44', '2023-12-04 05:07:44'),
	(40, 'App\\Models\\User', 1, 'Dipika', 'fdfa02d0351a9bd889697a513b29a4896f7859a1ba2b48fd716adec4a9145e9f', '["*"]', NULL, NULL, '2023-12-04 05:08:35', '2023-12-04 05:08:35'),
	(41, 'App\\Models\\User', 1, 'Dipika', '3231140bcd2bffea9d95fe601aa3ba8d826b48c81e83f736ea655a271bc46627', '["*"]', '2023-12-04 21:11:55', NULL, '2023-12-04 05:11:06', '2023-12-04 21:11:55'),
	(42, 'App\\Models\\User', 1, 'Dipika', '2adc8d32c7515a9a4fc5b0d1e81bd9e9abb4cc795bb9c27f05bd9f2cb490ccd4', '["*"]', '2023-12-04 05:24:30', NULL, '2023-12-04 05:22:55', '2023-12-04 05:24:30'),
	(44, 'App\\Models\\User', 1, 'Dipika', 'bc05a8fa37c92c407e31708c6fb8995a09f633e9789f1a874fb34a824e77d048', '["*"]', NULL, NULL, '2023-12-04 06:44:21', '2023-12-04 06:44:21'),
	(52, 'App\\Models\\User', 1, 'Dipika', '73e5c2a6b0e4cc6a74d8fa75ca2f18c5a53bfb7c4dc31f8d54a66187e71b49a8', '["*"]', '2023-12-06 06:33:43', NULL, '2023-12-06 01:39:05', '2023-12-06 06:33:43'),
	(53, 'App\\Models\\User', 1, 'Dipika', '609e28030dc21f1cdaa02b8f688ade4506141e0041c849bfb844867ccd404a72', '["*"]', '2023-12-20 00:35:20', NULL, '2023-12-06 06:23:24', '2023-12-20 00:35:20'),
	(54, 'App\\Models\\User', 1, 'Dipika', '62405431adae594afcc38f03b199063a4bb24d6f90a30f62aca0b76499c5ac18', '["*"]', '2023-12-07 01:21:54', NULL, '2023-12-06 06:39:44', '2023-12-07 01:21:54'),
	(61, 'App\\Models\\User', 1, 'Dipika', '9a0baf0330291087eab77af0963ba4e959972b979a3e0cc086f9fb6763f4ccc0', '["*"]', '2023-12-22 04:13:24', NULL, '2023-12-07 08:51:32', '2023-12-22 04:13:24');

-- Dumping structure for table start.tasks
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `task` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `date` date DEFAULT NULL,
  `user_id` int NOT NULL DEFAULT '1',
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.tasks: ~9 rows (approximately)
DELETE FROM `tasks`;
INSERT INTO `tasks` (`id`, `title`, `task`, `created_at`, `updated_at`, `date`, `user_id`, `status`) VALUES
	(2, 'Dolor quia saepe ver', 'Neque assumenda fugi', '2023-12-04 02:09:24', '2023-12-04 02:09:24', '1976-09-02', 2, 'pending'),
	(4, 'hello', 'world', '2023-12-04 02:21:49', '2023-12-04 02:21:49', '2023-12-12', 2, 'pending'),
	(6, 'one', 'world', '2023-12-04 02:27:50', '2023-12-04 02:27:50', '2023-12-12', 2, 'pending'),
	(9, 'two1', 'world1', '2023-12-04 02:48:20', '2023-12-04 02:48:20', '2023-12-12', 2, 'pending'),
	(25, 'Completed1', 'Hello', '2023-12-05 23:29:24', '2023-12-19 01:05:47', '2023-12-06', 1, 'completed'),
	(26, 'Completed2', 'Reiciendis sit paria', '2023-12-05 23:29:29', '2023-12-08 06:40:56', '1998-09-25', 1, 'pending'),
	(27, 'Completed3', 'Commodi mollitia asp', '2023-12-05 23:29:34', '2023-12-07 08:53:32', '1980-05-17', 1, 'completed'),
	(28, 'changeTaskAgain', 'changeTaskAgain', '2023-12-05 23:29:38', '2023-12-07 08:53:26', '2022-10-06', 1, 'pending'),
	(29, 'Et debitis laudantiu', 'Quo quam quis corrup', '2023-12-05 23:29:43', '2023-12-08 01:09:02', '2001-12-26', 1, 'completed');

-- Dumping structure for table start.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table start.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Deepi', '12@gmail.com', NULL, '$2y$12$9eK0bd7nFYi2Qzr2pLzKYer44wjU6DjU9sVNEVm/LD0jGLIxLsspi', NULL, '2023-12-04 02:00:42', '2023-12-04 02:00:42'),
	(2, 'Dipika', '21@gmail.com', NULL, '$2y$12$WYe.nec/ko43amWWigHKIeysmfZ.lGqcqs8vLlPuMqVKtDqFHFnU2', NULL, '2023-12-04 02:01:07', '2023-12-04 02:01:07');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
