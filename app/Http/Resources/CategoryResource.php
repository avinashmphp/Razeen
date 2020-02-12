<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'slug' => $this->slug_en,
            'nameAr' => $this->name_ar,
            'descriptionEn' => $this->description_en,
            'descriptionAr' => $this->description_ar,
            $this->mergeWhen(Auth::user(), [
                'id' => $this->id,
                'slugAR' => $this->slug_ar,
                'products' => ProductResource::collection($this->whenLoaded('products')),
            ]),
        ];
    }
}
