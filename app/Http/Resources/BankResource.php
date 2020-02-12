<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class BankResource extends JsonResource
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
            'logo' => $this->logo,
            $this->mergeWhen(Auth::user(), [
                'id' => $this->id,
                'slugEn' => $this->slug_en,
                'slugAR' => $this->slug_ar,
            ]),
            'products' => ProductResource::collection($this->whenLoaded('products')),
        ];
    }
}
