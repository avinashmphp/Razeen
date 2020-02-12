<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'nameEn' => $this->name_en,
            'nameAr' => $this->name_ar,
            'percentage' => $this->percentage,
            $this->mergeWhen(Auth::user(), [
                'id' => $this->id,
                'slugEn' => $this->slug_en,
                'slugAR' => $this->slug_ar,
            ]),
            'bank' => new BankResource($this->whenLoaded('bank')),
        ];
    }
}
