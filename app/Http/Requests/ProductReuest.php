<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductReuest extends FormRequest
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
            'nameEn' => 'required|string|max:55|unique:products,name_en,' . $this->segment(4),
            'nameAr' => 'required|string|max:55|unique:products,name_ar,' . $this->segment(4),
            'bank' => 'required|exists:banks,id',
            'percentage' => 'required|between:0,99.99',
        ];
    }
}
