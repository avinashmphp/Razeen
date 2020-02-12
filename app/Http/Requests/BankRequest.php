<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BankRequest extends FormRequest
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
            'nameEn' => 'required|string|max:35|unique:banks,name_en,' . $this->segment(3),
            'nameAr' => 'required|string|max:35|unique:banks,name_ar,' . $this->segment(3),
            'logo' => 'required',
        ];
    }
}
