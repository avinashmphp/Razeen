<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nameEn' => 'required|string|max:20|unique:categories,name_en,' . $this->segment(3),
            'descriptionEn' => 'required|string|max:100|unique:categories,description_en,' . $this->segment(3),
            'nameAr' => 'required|string|max:25|unique:categories,name_ar,' . $this->segment(3),
            'descriptionAr' => 'required|string|max:100|unique:categories,description_ar,' . $this->segment(3),
            'products' => 'required|exists:products,id',
        ];
    }
}
