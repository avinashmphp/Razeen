-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.22-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.1.0.5562
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table razeen.banks: ~12 rows (approximately)
/*!40000 ALTER TABLE `banks` DISABLE KEYS */;
INSERT INTO `banks` (`id`, `name_en`, `slug_en`, `name_ar`, `slug_ar`, `logo`, `created_at`, `updated_at`) VALUES
	(32, 'Alawwal Bank', 'alawwal-bank', 'البنك االأول', 'albnk-aalaol', 'banks/alawwal-bank-577.jpeg', '2020-02-12 21:03:44', '2020-02-12 21:03:44'),
	(33, 'NCB', 'ncb', 'البنك الأهلي التجاري', 'albnk-alahly-altjary', 'banks/ncb-495.jpeg', '2020-02-12 21:04:26', '2020-02-12 21:04:26'),
	(34, 'Al Rajhi Bank', 'al-rajhi-bank', 'مصرف الراجحي', 'msrf-alrajhy', 'banks/al-rajhi-bank-959.jpeg', '2020-02-12 21:04:53', '2020-02-12 21:04:53'),
	(35, 'riyad bank', 'riyad-bank', 'بنك الرياض', 'bnk-alryad', 'banks/riyad-bank-850.jpeg', '2020-02-12 21:05:19', '2020-02-12 21:05:19'),
	(36, 'Bank Aljazira', 'bank-aljazira', 'بنك الجزيرة', 'bnk-aljzyr', 'banks/bank-aljazira-103.jpeg', '2020-02-12 21:05:42', '2020-02-12 21:05:42'),
	(37, 'The Saudi Investment Bank', 'the-saudi-investment-bank', 'البنك السعودي للإستثمار', 'albnk-alsaaody-llestthmar', 'banks/the-saudi-investment-bank-861.jpeg', '2020-02-12 21:06:48', '2020-02-12 21:06:48'),
	(38, 'Banque Saudi Fransi', 'banque-saudi-fransi', 'البنك السعودي الفرنسي', 'albnk-alsaaody-alfrnsy', 'banks/banque-saudi-fransi-421.jpeg', '2020-02-12 21:07:18', '2020-02-12 21:07:18'),
	(39, 'SABB', 'sabb', 'بنك ساب', 'bnk-sab', 'banks/sabb-709.jpeg', '2020-02-12 21:07:33', '2020-02-12 21:07:33'),
	(40, 'SAMBA', 'samba', 'بنك سامبا', 'bnk-samba', 'banks/samba-295.jpeg', '2020-02-12 21:07:49', '2020-02-12 21:07:49'),
	(41, 'ANB', 'anb', 'البنك العربي الوطني', 'albnk-alaarby-alotny', 'banks/anb-406.jpeg', '2020-02-12 21:08:12', '2020-02-12 21:08:12'),
	(42, 'Bank Albilad', 'bank-albilad', 'بنك البلاد', 'bnk-alblad', 'banks/bank-albilad-377.png', '2020-02-12 21:08:37', '2020-02-12 21:08:37'),
	(43, 'Alinma Bank', 'alinma-bank', 'مصرف الإنماء', 'msrf-alenma', 'banks/alinma-bank-828.jpeg', '2020-02-12 21:08:57', '2020-02-12 21:08:57');
/*!40000 ALTER TABLE `banks` ENABLE KEYS */;

-- Dumping data for table razeen.categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name_en`, `slug_en`, `description_en`, `name_ar`, `slug_ar`, `description_ar`, `created_at`, `updated_at`) VALUES
	(3, 'Salary', 'salary', '(How much you\r\n                <br />can afford?)', 'Salary', 'salary', '(How much you\r\n                <br />can afford?)', '2020-01-30 19:32:29', '2020-02-12 21:21:17'),
	(4, 'House Amount', 'house-amount', '(how much it\r\n                <br />costs?)', 'House Amount', 'house-amount', '(how much it\r\n                <br />costs?)', NULL, '2020-02-12 21:21:23');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Dumping data for table razeen.category_product: ~4 rows (approximately)
/*!40000 ALTER TABLE `category_product` DISABLE KEYS */;
INSERT INTO `category_product` (`id`, `category_id`, `product_id`, `created_at`, `updated_at`) VALUES
	(8, 3, 6, NULL, NULL),
	(9, 3, 7, NULL, NULL),
	(10, 4, 8, NULL, NULL),
	(11, 4, 9, NULL, NULL);
/*!40000 ALTER TABLE `category_product` ENABLE KEYS */;

-- Dumping data for table razeen.failed_jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Dumping data for table razeen.migrations: ~7 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(11, '2020_01_23_115624_create_banks_table', 2),
	(12, '2020_01_23_115653_create_products_table', 2),
	(13, '2020_01_23_115836_create_categories_table', 2),
	(14, '2020_01_23_124230_create_category_product_table', 2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping data for table razeen.password_resets: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping data for table razeen.products: ~4 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `bank_id`, `name_en`, `slug_en`, `name_ar`, `slug_ar`, `percentage`, `created_at`, `updated_at`) VALUES
	(6, 35, 'Personal Finance', 'personal-finance', 'Personal Finance', 'altmoyl-alshkhsy', 3.50, '2020-02-12 21:11:32', '2020-02-12 21:11:32'),
	(7, 38, 'BSF Personal Finance', 'bsf-personal-finance', 'BSF Personal Finance', 'albnk-alsaaody-alfrnsy-almrabh', 3.70, '2020-02-12 21:13:50', '2020-02-12 21:13:50'),
	(8, 37, 'SAIB Arzaq Murabaha Finance', 'saib-arzaq-murabaha-finance', 'SAIB Arzaq Murabaha Finance', 'albnk-alsaaody-llastthmar-tmoyl-arzak', 3.30, '2020-02-12 21:14:17', '2020-02-12 21:14:17'),
	(9, 33, 'NCB Personal Finance by local shares', 'ncb-personal-finance-by-local-shares', 'NCB Personal Finance by local shares', 'albnk-alahly-altjary-tmoyl-shkhsy-lghyr-alsaaodyyn', 3.10, '2020-02-12 21:14:52', '2020-02-12 21:14:52');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping data for table razeen.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Avinash Haneefa', '966538291882', 'avinash.haneefa@gmail.com', '2020-01-23 16:09:45', '$2y$10$VrlJRI9zsPi6rurA6RSSB.A6jzMN2oQD4t.Mws5WKbjYY/Irsvv1C', 'B1URWUoYj0XWpV44uxSRsU37AzKINgr0dl6YWw8gpnDu7ReiKa5jIfW0vRH7', '2020-01-23 16:09:16', '2020-01-23 16:09:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
