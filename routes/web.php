<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('spa');
});
Route::get('/result', function () {
    return view('spa');
});
Route::post('result', 'ResultController@getResult')->name('calculator.result');

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('auth')->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::resources([
            'banks' => 'BankController',
            'bank/products' => 'ProductController',
            'categories' => 'CategoryController',
        ], ['except' => ['create', 'show', 'edit']]);
    });
    Route::prefix('api')->group(function () {
        Route::get('banks/list', 'BankController@getBanks')->name('banks.list');
        Route::get('products/list', 'ProductController@getProducts')->name('products.list');
        Route::get('bank/products/{bank}', 'BankController@getBankProducts')->name('bank.products');
    });
});
Route::get('api/categories/list', 'CategoryController@getCategories')->name('categories.list');
