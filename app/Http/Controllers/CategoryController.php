<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('spa');
    }

    /* 
    * List all categories
    */

    public function getCategories()
    {
        return CategoryResource::collection(Category::with('products')->get())
            ->response()
            ->setStatusCode(200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $category = new Category();
        $category->name_en = $request->nameEn;
        $category->slug_en = Str::slug($request->nameEn);
        $category->description_en = $request->descriptionEn;
        $category->name_ar = $request->nameAr;
        $category->slug_ar =  Str::slug($request->nameAr);
        $category->description_ar = $request->descriptionAr;
        $category->save();
        $category->products()->attach($request->products);
        return response()->json(['success' => 'Category Created'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {

        try {
            $category = Category::findOrFail($category->id);
            $category->name_en = $request->nameEn;
            $category->slug_en = Str::slug($request->nameEn);
            $category->description_en = $request->descriptionEn;
            $category->name_ar = $request->nameAr;
            $category->slug_ar = Str::slug($request->nameAr);
            $category->description_ar = $request->descriptionAr;
            $category->save();
            $category->products()->sync($request->products);
            return response()->json(['success' => 'Category Updated'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['success' => 'Successfully Deleted'], 204);
    }
}
