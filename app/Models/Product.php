<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['bank_id', 'name_en', 'slug_en', 'name_ar', 'slug_ar', 'percentage'];

    /**
     * Get the bank that owns the product.
     */
    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

    /**
     * The categories that belong to the product.
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
