<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResultResource extends JsonResource
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
            // 'nameEn' => $this->name_en,
            // 'nameAr' => $this->name_ar,
            'products' => ProductResource::collection($this->whenLoaded('products')),
        ];
    }
}
