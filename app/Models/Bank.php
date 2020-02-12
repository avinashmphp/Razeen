<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'slug_en', 'name_ar', 'slug_ar', 'logo'];

    /**
     * Get the products for the bank.
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
