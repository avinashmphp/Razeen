<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name_en', 'slug_en', 'description_en', 'name_ar', 'slug_ar', 'description_ar'];

       /**
     * The products that belong to the category.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
